import {Validator}  from '#nuxt-server-utils';
import WeatherSchema from '~/schemas/Weather.schema';
import { Weather } from '~/server/models/Weather.model';
import OpenAI from "openai";
import axios from 'axios';

const config = useRuntimeConfig();
const openai = new OpenAI({
  apiKey: config.openaiSecret,
});
const owApiKey = config.openWeatherSecret;
console.log('owApiKey', config.owSecret);
console.log('openai', config.openaiSecret);

export default defineEventHandler(async (event) => {
  const user = event.context.user;
  const body = await readBody(event); // will only be a city for now

  Validator.validateSchema(WeatherSchema, body);
  
  let gptResponse;
  let openWeatherResponse :string;
  let responseError: string;
  const getWeather = () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${body}&units=metric&appid=${owApiKey}`;
    axios
      .get(apiUrl)
      .then((response) => {
        openWeatherResponse = response.data;
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        responseError = error.response.data.message;
      });
  }; 
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: `The weather in ${body.city} degrees and sunny. Explain this weather in a goofy and witty way; perhaps in a southern or british accent, and using their terminologies. Two sentences max.` }],
    model: "gpt-3.5-turbo-1106",
  });
  gptResponse = completion.choices[0].message.content;
  const weather = await Weather.create({
    ...body,
    description: gptResponse
  })

  console.log('weather', weather);
  return weather;
})
