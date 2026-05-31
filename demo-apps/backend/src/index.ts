import { createServer } from 'node:http';

import { yogaGraphQL } from './graphql';

export const server = createServer(yogaGraphQL);
const port = process.env.PORT || 4000;
server.listen(port, () => {
  if (process.env.NODE_ENV === 'test') {
    return;
  }
  console.log(`Server is running on http://localhost:${port}`);
});
