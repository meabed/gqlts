import { existsSync } from 'node:fs';

import { useParserCache } from '@envelop/parser-cache';
import { useValidationCache } from '@envelop/validation-cache';
import { GraphQLBigInt, GraphQLDateTime, GraphQLTime, GraphQLUUID } from 'graphql-scalars';
import { createYoga } from 'graphql-yoga';
import {
  asNexusMethod,
  connectionPlugin,
  declarativeWrappingPlugin,
  fieldAuthorizePlugin,
  makeSchema,
  queryComplexityPlugin,
  scalarType,
} from 'nexus';

import { IGraphQLContext } from './graphql/graphql-context';
import { useGraphqlAppExtension } from './graphql/use-graphql-app-extension';
import { v1AddUser } from './mutation/v1-add-user.mutation';
import { v1DeleteUser } from './mutation/v1-delete-user.mutation';
import { v1UpdateProfileImage } from './mutation/v1-update-profile-image';
import { v1GetUser } from './query/v1-get-user';
import { v1SatHello } from './query/v1-say-hello.query';
import { v1ListUsersSubscription } from './subscription/v1-list-users.subscription';

const FileScalar = scalarType({
  name: 'File',
  asNexusMethod: 'file',
  description: 'The `File` scalar type represents a file upload.',
  sourceType: 'File',
});

const bigIntScalar = asNexusMethod(GraphQLBigInt, 'bigint');
const DateScalar = asNexusMethod(GraphQLDateTime, 'date');
const TimeScalar = asNexusMethod(GraphQLTime, 'time');
const UuidScalar = asNexusMethod(GraphQLUUID, 'uuid');

export const graphqlSharedTypes = [FileScalar, bigIntScalar, DateScalar, TimeScalar, UuidScalar];

const allSchemas = [
  graphqlSharedTypes,
  v1SatHello,
  v1AddUser,
  v1DeleteUser,
  v1GetUser,
  v1ListUsersSubscription,
  v1UpdateProfileImage,
];

async function formatGeneratedArtifact(content: string, type: 'types' | 'schema') {
  const { format } = await import('oxfmt');
  const result = await format(type === 'schema' ? 'schema.graphql' : 'graphql-schema.ts', content, {
    printWidth: 120,
    semi: true,
    singleQuote: true,
    sortImports: true,
    trailingComma: 'all',
  });

  if (result.errors.length > 0) {
    const error = result.errors[0];
    throw new Error(error.codeframe || error.message);
  }

  return result.code;
}

export const appSchema = makeSchema({
  types: allSchemas,
  outputs: {
    schema: __dirname + `/schema.graphql`,
    typegen: __dirname + `/graphql-schema.ts`,
  },
  formatTypegen: formatGeneratedArtifact,
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
  contextType: existsSync(`${__dirname}/graphql/graphql-context.ts`)
    ? {
        module: `${__dirname}/graphql/graphql-context.ts`,
        export: 'IGraphQLContext',
      }
    : undefined,
  plugins: [
    // nexus-plugins
    declarativeWrappingPlugin(),
    connectionPlugin(),
    fieldAuthorizePlugin(),
    queryComplexityPlugin(),
  ],
});

const plugins = [useParserCache(), useValidationCache(), useGraphqlAppExtension];

export const yogaGraphQL = createYoga<IGraphQLContext>({
  async context(options) {
    return {
      ...options,
      req: options.req,
      res: options.res,
      startTime: Date.now(),
    };
  },
  schema: appSchema,
  landingPage: false,
  multipart: true,
  parserAndValidationCache: true,
  plugins,
});
