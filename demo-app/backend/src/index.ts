import { yogaGraphQL } from './graphql';
import { createServer } from 'node:http';

export const server = createServer(yogaGraphQL);

server.listen(3000, () => {
  if (process.env.NODE_ENV === 'test') {
    return;
  }
  console.log('Visit http://localhost:3000/graphql');
});
