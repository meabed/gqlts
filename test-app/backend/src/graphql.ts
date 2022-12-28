import { v1AddUser } from './mutation/v1-add-user.mutation';
import {
  connectionPlugin,
  declarativeWrappingPlugin,
  fieldAuthorizePlugin,
  makeSchema,
  queryComplexityPlugin,
} from 'nexus';

const allSchemas = [v1AddUser];
export const schema = makeSchema({
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
    declarativeWrappingPlugin({ disable: false }),
    connectionPlugin(),
    fieldAuthorizePlugin(),
    queryComplexityPlugin(),
  ],
});
