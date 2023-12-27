import { Weather } from '~/server/models/Weather.model';

export default defineEventHandler(async (event) => {
  const user = event.context.user;

  const weathers = Weather.find({
    owner: user._id
  })

  return weathers;
})
