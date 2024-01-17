import {Validator}  from '#nuxt-server-utils';
import MessageSchema from '~/schemas/Message.schema';
import { Message } from '~/server/models/Message.model'; 
import { rateLimitWrapper } from '~/utils/rateLimitWrapper';

const messagePoster = async (event: any) => {
  const body = await readBody(event);
  Validator.validateSchema(MessageSchema, body);
  const message = await Message.create({
    ...body
  })
  console.log('MESSAGE POSTED \n', message);
};

export default eventHandler(rateLimitWrapper(messagePoster, {
  interval: 1000, 
  threshold: 5,
  cb: (info, args) => {
    console.log(`Rate limit reached. Temperature: ${info.temperature}, Wait: ${info.wait}`);
    return 'The server is experiencing a high volume of requests. Please try again soon.'
  }
}));