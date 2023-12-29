import {Validator}  from '#nuxt-server-utils';
import MessageSchema from '~/schemas/Message.schema';
import { Message } from '~/server/models/Message.model'; 

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  Validator.validateSchema(MessageSchema, body);

  const message = await Message.create({
    ...body
  })
  console.log(message);
})
