import {Validator}  from '#nuxt-server-utils';
import MessageSchema from '~/schemas/Message.schema';
import { Message } from '~/server/models/Message.model'; 
import { rateLimitWrapper } from '~/utils/rateLimitWrapper';
import { WebhookClient } from 'discord.js';

const config = useRuntimeConfig();
const url = config.discordWebhook; //discord integration (won't be public to anyone but me)
const token = config.discordToken; //discord integration (won't be public to anyone but me)
console.log('url', url);
console.log('token', token);
const webhookClient = new WebhookClient({ url, token });

const messagePoster = async (event: any) => {
  const body = await readBody(event);
  Validator.validateSchema(MessageSchema, body);
  const message = await Message.create({
    ...body
  })
  console.log('MESSAGE POSTED \n', message);


  let messageStringSendable = `New message from ${message.name} at ${message.contact}:\n${message.message}`;
  if (message.company) {
    messageStringSendable += `\nCompany: ${message.company}`;
  }
  webhookClient.send(messageStringSendable); //discord integration (won't be public to anyone but me)
};

export default eventHandler(rateLimitWrapper(messagePoster, {
  interval: 1000, 
  threshold: 5,
  cb: (info, args) => {
    console.log(`Rate limit reached. Temperature: ${info.temperature}, Wait: ${info.wait}`);
    return 'The server is experiencing a high volume of requests. Please try again soon.';
  }
}));