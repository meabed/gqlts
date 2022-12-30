import { createClient } from '../hasura/generated';
import assert from 'assert';
import QueryBatcher from 'graphql-query-batcher';
import fetch from 'isomorphic-unfetch';

const URL = 'https://realtime-chat.hasura.app/v1/graphql';

describe('use fetcher', () => {
  const fetcherInstance = fetch;
  const fetcherMethod = (op) =>
    fetcherInstance(URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + process.env.GITHUB_TOKEN,
      },
      body: JSON.stringify(op),
    }).then((response) => response.json());

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
    // console.log(res);
    assert(res);
  });
});

describe('batch queries', () => {
  const fetcherInstance = fetch;
  const fetcherMethod = (batchedQuery) => {
    assert(batchedQuery.length === 3);
    return fetch(URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + process.env.GITHUB_TOKEN,
      },
      body: JSON.stringify(batchedQuery),
    }).then((response) => response.json());
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
  });
});
