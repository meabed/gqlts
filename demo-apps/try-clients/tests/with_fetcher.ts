import { createClient } from '../hasura/generated/index.js';
import assert from 'assert';

const QueryBatcher = require('graphql-query-batcher');

const user = {
  id: 1,
  username: 'John',
  last_seen: new Date().toISOString(),
};

describe('use fetcher', () => {
  const fetcherInstance = {};
  const fetcherMethod = async (op: any) => {
    assert.equal(typeof op.query, 'string');
    return { data: { user: [user] } };
  };

  const client = createClient({
    fetcherInstance,
    fetcherMethod,
  });
  it('query with fetcher', async () => {
    const res = await client.query({
      user: {
        __scalar: true,
      },
    });
    assert.deepEqual(res.data?.user, [user]);
  });
});

describe('batch queries', () => {
  const fetcherInstance = {};
  const fetcherMethod = (batchedQuery: any[]) => {
    assert.equal(batchedQuery.length, 3);
    return Promise.resolve(batchedQuery.map(() => ({ data: { user: [user] } })));
  };

  const batcher = new QueryBatcher(fetcherMethod, {
    maxBatchSize: 10,
    batchInterval: 100,
  });
  const client = createClient({
    fetcherInstance,
    fetcherMethod: ({ query, variables }: any) => {
      return batcher.fetch(query, variables);
    },
  });
  it('query with fetcher', async () => {
    const res = await Promise.all([
      client.query({
        user: {
          last_seen: true,
          // age: true,
        },
      }),
      client.query({
        user: {
          id: true,
        },
      }),
      client.query({
        user: {
          username: true,
          // name: true,
        },
      }),
    ]);
    assert.equal(res.length, 3);
    res.forEach((response) => assert.deepEqual(response.data?.user, [user]));
  });
});
