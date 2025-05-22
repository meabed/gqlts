import { generate } from '@gqlts/cli';
import { readFileSync } from 'fs';
import { join } from 'path';

generate({
  schema: readFileSync(join(__dirname, 'schema.graphql')).toString(),
  output: join(__dirname, 'generated'),
  scalarTypes: {
    MongoID: 'string',
  },
}).catch(console.error);
