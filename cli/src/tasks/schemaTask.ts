import { Config } from '../config';
import { fetchSchema } from '../schema/fetchSchema';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchema } from '@graphql-tools/load';
import { assertValidSchema, lexicographicSortSchema } from 'graphql';
import { ListrTask } from 'listr';

export function schemaTask(config: Config): ListrTask {
  const processSchema = (schema) => {
    if (config.sortProperties) {
      return lexicographicSortSchema(schema);
    }
    return schema;
  };

  if (config.endpoint) {
    const endpoint = config.endpoint;
    return {
      title: `fetching schema using ${config.useGet ? 'GET' : 'POST'} ${endpoint} and headers ${JSON.stringify(
        config.headers,
      )}`,
      task: async (ctx) => {
        ctx.schema = processSchema(
          await fetchSchema({
            endpoint,
            usePost: !config.useGet,
            headers: config.headers,
          }),
        );
      },
    };
  } else if (config.schema) {
    const schema = config.schema;
    return {
      title: 'loading schema',
      task: async (ctx) => {
        // const options = config.options && config.options.schemaBuild
        const document = await loadSchema(schema, {
          loaders: [new GraphQLFileLoader()],
        });
        ctx.schema = processSchema(document);

        try {
          assertValidSchema(ctx.schema);
        } catch (e: any) {
          if (e.message === 'Query root type must be provided.') return;
          throw e;
        }
      },
    };
  } else {
    throw new Error('either `endpoint`, `fetcher` or `schema` must be defined in the config');
  }
}
