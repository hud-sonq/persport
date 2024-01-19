import {Validator}  from '#nuxt-server-utils';
import WeatherSchema from '~/schemas/Weather.schema';
import { Weather } from '~/server/models/Weather.model';
import OpenAI from "openai";
import axios from 'axios';
import { rateLimitWrapper } from '~/utils/rateLimitWrapper';
import { WebhookClient } from 'discord.js';

const config = useRuntimeConfig();
const openai = new OpenAI({
  apiKey: config.openaiSecret,
});
const owApiKey = config.owSecret;
const url = config.discordWebhook; //discord integration (won't be public to anyone but me)
const token = config.discordToken; //discord integration (won't be public to anyone but me)
const webhookClient = new WebhookClient({ url, token });

const gptWeather = async (event: any) => {
  const body = await readBody(event); // will only be a city for now
  Validator.validateSchema(WeatherSchema, body);
  
  let gptResponse;
  let openWeatherResponse: any;
  let messageStringSendable = `Someone made a weather request for ${body.city}!`;
  
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
    });
    webhookClient.send(messageStringSendable); //discord integration (won't be public to anyone but me)
    return gptResponse;
  } catch (e) {
    return (e as any).response.data.message;
  }
};

export default eventHandler(rateLimitWrapper(gptWeather, {
  interval: 1000, 
  threshold: 5,
  cb: (info, args) => {
    console.log(`Rate limit reached. Temperature: ${info.temperature}, Wait: ${info.wait}`);
    return 'The server is experiencing a high volume of requests. Please try again soon.'
  }
}));