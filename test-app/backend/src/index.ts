import { appSchema } from './graphql';
import { createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';

const yoga = createYoga({
  schema: appSchema,
  landingPage: false,
  multipart: true,
  parserCache: true,
  validationCache: true,
});

export const server = createServer(yoga);

server.listen(3000, () => {
  if (process.env.NODE_ENV === 'test') {
    return;
  }
  console.log('Visit http://localhost:3000/graphql');
});
