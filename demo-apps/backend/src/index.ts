import { yogaGraphQL } from './graphql';
import { createServer } from 'node:http';

export const server = createServer(yogaGraphQL);
const port = process.env.PORT || 4000;
server.listen(port, () => {
  if (process.env.NODE_ENV === 'test') {
    return;
  }
  console.log(`Server is running on http://localhost:${port}`);
});
