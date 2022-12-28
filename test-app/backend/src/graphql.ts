import { v1AddUser } from './mutation/v1-add-user.mutation';
import { v1DeleteUser } from './mutation/v1-delete-user.mutation';
import { v1SatHello } from './query/v1-say-hello.query';
import {
  connectionPlugin,
  declarativeWrappingPlugin,
  fieldAuthorizePlugin,
  makeSchema,
  queryComplexityPlugin,
} from 'nexus';

const allSchemas = [v1SatHello, v1AddUser, v1DeleteUser, v1DeleteUser];
export const appSchema = makeSchema({
  types: allSchemas,
  outputs: {
    schema: __dirname + `/../../sdk/schema.graphql`,
    typegen: __dirname + `/graphql-schema.ts`,
  },
  sourceTypes: {
    headers: [`import { FileUpload } from "graphql-upload-ts";`],
    modules: [],
    mapping: {
      DateTime: 'Date | string',
      Date: 'Date | string',
      Time: 'Date | string',
      BigInt: 'number',
      UUID: 'string',
      Upload: 'FileUpload',
    },
  },
  shouldExitAfterGenerateArtifacts: process.argv.includes('--exit-after-generate-schema'),
  plugins: [
    // nexus-plugins
    declarativeWrappingPlugin(),
    connectionPlugin(),
    fieldAuthorizePlugin(),
    queryComplexityPlugin(),
  ],
});
