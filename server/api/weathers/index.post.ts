import {Validator}  from '#nuxt-server-utils';
import WeatherSchema from '~/schemas/Weather.schema';
import { Weather } from '~/server/models/Weather.model';
import OpenAI from "openai";
import axios from 'axios';

interface RateLimitOptions<Args extends any[] = any[]> {
  /**
   * "Rate limit on average `interval` milliseconds."
   */
  interval: number;
  /**
   * Will block after internal temperature reaches `threshold`.
   * 
   * Example: 5 allows 5 calls in a row, but the 6th will be blocked.
   * 
   * Will take 5 * `interval` milliseconds to cool down.
   */
  threshold: number;
  /**
   * callback to be called when rate limit is reached.
   * 
   * Throw an error at the end to override default error
   */
  cb?: (info: { temperature: number, wait: number }, args: Args) => void;
}

function rateLimitWrapper<Fn extends (...args: any[]) => any>(
  fn: Fn,
  options: RateLimitOptions<Parameters<Fn>>,
): Fn {
  
  let temperature = 0;
  let lastTime = Date.now();

  function rateLimitedFn(...args: Parameters<Fn>): ReturnType<Fn> {
    const now = Date.now();
    const timeDiff = now - lastTime;
    lastTime = now;

    temperature -= timeDiff;
    if (temperature < 0) {
      temperature = 0;
    }

    const wait = temperature - options.threshold * options.interval;
    if (wait >= 0) {
      
      options?.cb && options.cb({
        temperature,
        wait,
      }, args);

      throw new Error(`Rate limit reached. Try again in ${wait}ms.}`);
    }

    temperature += options.interval;
    return fn(...args);
  }

  return rateLimitedFn as Fn;
}

const config = useRuntimeConfig();
const openai = new OpenAI({
  apiKey: config.openaiSecret,
});
const owApiKey = config.owSecret;

const gptWeather = eventHandler(async (event) => {
  const body = await readBody(event); // will only be a city for now
  Validator.validateSchema(WeatherSchema, body);
  
  let gptResponse;
  let openWeatherResponse: any;
  
  const getOpenWeather = async () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${body.city}&units=metric&appid=${owApiKey}`;
    const response = await axios.get(apiUrl);
    openWeatherResponse = response.data;
    console.log('WEATHER REQUESTED \n', openWeatherResponse);
  }

  try { // to combine openweather with gpt prompt
    await getOpenWeather();
    const theWeatherTemp = (openWeatherResponse.main.temp * 1.8 + 32).toFixed(1);
    const theWeatherDesc = openWeatherResponse.weather[0].description;
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: `The temp in ${body.city} is ${theWeatherTemp} fahrenheit. It's ${theWeatherDesc}. Explain this weather in a goofy southern accent. One sentence max. Always mention the temp.` }],
      model: "gpt-3.5-turbo-1106",
    });
    gptResponse = completion.choices[0].message.content;
    const weather = await Weather.create({
      ...body,
      description: gptResponse
    })
    return gptResponse;
  } catch (e) {
    return (e as any).response.data.message;
  }
});

export default rateLimitWrapper(gptWeather, {
  interval: 1000, 
  threshold: 5,
  cb: (info, args) => {
    console.log(`Rate limit reached. Temperature: ${info.temperature}, Wait: ${info.wait}`);
    return 'The server is experiencing a high volume of requests. Please try again soon.'
  }
});