import {Validator}  from '#nuxt-server-utils';
import WeatherSchema from '~/schemas/Weather.schema';
import { Weather } from '~/server/models/Weather.model';

export default defineEventHandler(async (event) => {
  const user = event.context.user;
  const body = await readBody(event);

  Validator.validateSchema(WeatherSchema, body);

  const weather = await Weather.create({
    ...body,
    owner: user._id
  })

  return weather;
})
