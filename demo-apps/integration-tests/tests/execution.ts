import { Account, createClient, everything, isHouse, isUser, Point, User } from '../generated';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { makeExecutableSchema } from '@graphql-tools/schema';
import assert from 'assert';
import axios from 'axios';
import { json } from 'body-parser';
import express from 'express';
import fs from 'fs';
import { PubSub } from 'graphql-subscriptions';
import { createServer } from 'http';
import path from 'path';
import { expectType } from 'tsd';
import { DeepPartial } from 'tsdef';
import { WebSocketServer } from 'ws';
import { afterEach, beforeEach, describe, it } from 'mocha';

// replace import useServer with require as https://github.com/enisdenjo/graphql-ws/issues/617
// import { useServer } from 'graphql-ws/lib/use/ws';
const { useServer } = require('graphql-ws/lib/use/ws');

const id = () => null;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let i = 0;

function getUrls() {
  const PORT = 8099 + i++;
  const URL = `http://localhost:` + PORT + '/graphql';
  const SUB_URL = `ws://localhost:` + PORT + '/graphql';
  return { URL, SUB_URL, PORT };
}

type Maybe<T> = T | undefined | null;

async function server({ resolvers, port }) {
  try {
    const app = express();
    const httpServer = createServer(app);
    const typeDefs = fs.readFileSync(path.join(__dirname, '..', 'schema.graphql')).toString();
    const schema = makeExecutableSchema({
      typeDefs,
      resolvers,
      resolverValidationOptions: {
        requireResolversForResolveType: 'ignore',
      },
    });
    const wsServer = new WebSocketServer({
      server: httpServer,
      path: '/graphql',
    });
    const subscriptionServer = useServer({ schema }, wsServer);
    const server = new ApolloServer({
      schema,
      allowBatchedHttpRequests: true,
      // plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
      plugins: [
        {
          async serverWillStart() {
            return {
              async drainServer() {
                await subscriptionServer?.dispose();
                await sleep(200);
              },
            };
          },
        },
      ],
    });
    await server.start();
    app.use(
      '/graphql',
      json(),
      expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
      }),
    );
    expressMiddleware(server);
    httpServer.listen(port).on('listening', () => {
      // console.log(`🚀  Server ready at ${URL} and ${SUB_URL}`);
    });
    return async () => {
      httpServer?.close();
      // await subscriptionServer?.dispose();
      await server.stop();
      await sleep(500);
    };
  } catch (e) {
    console.error('server had an error: ' + e);
    return () => null;
  }
}

describe('execute queries', async function () {
  const x: DeepPartial<User> = {
    name: 'John',
  };

  const { URL, PORT } = getUrls();
  const makeServer = () => {
    return server({
      port: PORT,
      resolvers: {
        Query: {
          user: () => {
            return x;
          },
          unionThatImplementsInterface: ({ typename = '' } = {}) => {
            return {
              message: 'A message',
              ownProp1: 'Own prop 1',
              ownProp2: 'Own prop 2',
              __typename: typename || 'ClientErrorNameInvalid',
            };
          },
          someScalarValue: () => 'someScalarValue',
          repository: () => {
            return {
              createdAt: 'now',
            };
          },
          account: () => {
            return {
              __typename: 'User',
              ...x,
            };
          },
          coordinates: () => {
            return {
              __typename: 'Bank',
              x: '1',
              y: '2',
              address: '3',
            };
          },
        },
      },
    });
  };
  const withServer = (func: any) => async () => {
    const serverStopFunction = await makeServer();
    try {
      await func();
    } catch (e) {
      console.error('error: ', e);
      throw e;
    } finally {
      await serverStopFunction();
    }
  };

  let client = createClient({
    url: URL,
    headers: () => ({ Auth: 'xxx' }),
  });

  it('simple query', async function () {
    withServer(async () => {
      const { data: res } = await client.query({
        user: {
          name: true,
        },
      });
      // console.log(JSON.stringify(res, null, 2));
      assert.deepStrictEqual(res?.user, x);
    });
  });

  it('__typename is not optional', async function () {
    withServer(async () => {
      const { data: res } = await client.query({
        user: {
          name: true,
          __typename: true,
        },
      });
      expectType<string | undefined>(res?.user!.__typename);
    });
  });

  it('scalar value with argument ', async function () {
    withServer(async () => {
      const { data: res } = await client.query({
        someScalarValue: true,
      });
      assert(res?.someScalarValue?.toLocaleLowerCase);
      const { data: res2 } = await client.query({
        someScalarValue: [{ x: 3 }],
      });
      assert(res2?.someScalarValue?.toLocaleLowerCase);
    });
  });
  it('falsy values are not fetched ', async function () {
    withServer(async () => {
      const { data: res } = await client.query({
        coordinates: {
          x: false,
          y: true,
        },
      });
      // console.log(JSON.stringify(res, null, 2));
      assert(res?.coordinates?.x === undefined);
      assert(res?.coordinates?.y !== undefined);
    });
  });

  it('required field and nested fields', async function () {
    withServer(async () => {
      client
        .query({
          // @ts-expect-error because name is required
          repository: [{}, { __scalar: true }],
        })
        .catch(id);

      const { data: res } = await client.query({
        repository: [
          {
            name: 'gqlts',
            owner: 'remorses',
          },
          {
            ...everything,
            forks: {
              edges: { node: { name: true, number: true } },
            },
          },
        ],
      });
      // console.log(JSON.stringify(res, null, 2));
      // @ts-expect-error because top level fields are filtered based on query
      res?.account;
      // no optional chaining because repository is non-null
      expectType<string | undefined>(res?.repository.createdAt);
      expectType<Maybe<string>>(res?.repository.__typename);
      expectType<Maybe<Maybe<string>[]>>(res?.repository?.forks?.edges?.map((x) => x?.node?.name));
      expectType<Maybe<Maybe<number>[]>>(res?.repository?.forks?.edges?.map((x) => x?.node?.number));
    });
  });
  it('chain syntax ', async function () {
    withServer(async () => {
      const { data: res } = await client.query({
        user: {
          __scalar: true,
          // sdf: true,
        },
      });
      // console.log(JSON.stringify(res, null, 2));
      expectType<Maybe<string>>(res?.user?.name);
      expectType<Maybe<number>>(res?.user?.common);
      expectType<Maybe<string>>(res?.user?.__typename);
    });
  });
  it('recursive type chain syntax ', async function () {
    withServer(async () => {
      const { data: res } = await client.query({
        recursiveType: {
          recurse: {
            recurse: {
              ...everything,
              recurse: {
                value: 1,
              },
            },
          },
        },
      });
      // console.log(JSON.stringify(res, null, 2));
      expectType<Maybe<string>>(res?.[0]?.recurse?.recurse?.value);
      expectType<Maybe<string>>(res?.[0]?.recurse?.recurse?.recurse?.value);
      expectType<Maybe<string>>(res?.[0]?.recurse?.recurse?.value);
    });
  });

  it('union types only 1 on_ normal syntax', async function () {
    withServer(async () => {
      const { data: res } = await client.query({
        account: {
          __typename: 1,
          on_User: {
            name: 1,
          },
        },
      });
      // @ts-expect-error because on_User should be removed
      res?.account?.on_User;

      let account = res?.account;
      assert(account?.__typename);
      expectType<Maybe<Account>>(account);
      // console.log(account);
    });
  });

  it('union types chain syntax', async function () {
    withServer(async () => {
      const { data: res } = await client.query({
        account: {
          on_User: { name: 1 },
        },
      });
      expectType<Maybe<Account>>(res?.account);
    });
  });
  it('chain syntax result type only has requested fields', async function () {
    withServer(async () => {
      const { data: res } = await client.query({ repository: [{ name: '' }, { createdAt: 1 }] });
      expectType<string | undefined>(res?.repository?.createdAt);
      // @ts-expect-error
      res?.forks;
    });
  });
  it('union types with chain and ...everything', async function () {
    withServer(async () => {
      const { data: res } = await client.query({
        account: {
          __typename: 1,
          on_User: { ...everything },
        },
      });
      let account = res?.account;
      expectType<Maybe<string>>(account?.__typename);
      if (isUser(account)) {
        expectType<Maybe<string>>(account?.name);
      }
    });
  });
  it('many union types', async function () {
    withServer(async () => {
      const { data: res } = await client.query({
        account: {
          __typename: 1,
          on_User: { ...everything },
          on_Guest: { ...everything },
        },
      });
      let account = res?.account;
      expectType<Maybe<string>>(account?.__typename);
      // common props are on both types
      expectType<Maybe<number>>(account?.common);
      if (account && 'anonymous' in account) {
        account?.anonymous;
      }
    });
  });
  it('ability to query interfaces that a union implements', async function () {
    withServer(async () => {
      const { data: res } = await client.query({
        unionThatImplementsInterface: {
          __typename: 1,
          on_ClientErrorNameInvalid: {
            message: 1,
            ownProp2: 1,
          },
          on_ClientError: {
            message: 1,
          },
          on_ClientErrorWithoutInterface: {
            ownProp3: 1,
          },
        },
      });
      let unionThatImplementsInterface = res?.unionThatImplementsInterface;

      if (unionThatImplementsInterface?.__typename === 'ClientErrorNameInvalid') {
        assert.ok(unionThatImplementsInterface?.ownProp2);
      }
      if (unionThatImplementsInterface?.__typename === 'ClientErrorWithoutInterface') {
        assert.ok(unionThatImplementsInterface?.ownProp3);
      }
    });
  });
  it('ability to query interfaces that a union implements, chain syntax', async function () {
    withServer(async () => {
      const { data: res } = await client.query({
        unionThatImplementsInterface: [
          {},
          {
            on_ClientError: { message: 1 },
            on_ClientErrorNameInvalid: { ownProp2: 1 },
          },
        ],
      });

      if (res?.unionThatImplementsInterface?.__typename === 'ClientErrorNameInvalid') {
        assert.ok(res?.unionThatImplementsInterface?.ownProp2);
      }
    });
  });
  it('interface types normal syntax', async function () {
    withServer(async () => {
      const { data: res } = await client.query({
        coordinates: {
          x: 1,
          __typename: 1,
          on_Bank: {
            // __typename: 1,
            address: 1,
            // x: 1,
          },
        },
      });
      let coordinates = res?.coordinates;
      expectType<Maybe<string>>(coordinates?.x);
      if (coordinates && 'address' in coordinates) {
        expectType<Maybe<string>>(coordinates?.address);
        assert(coordinates?.address);
      }
      // common types are accessible without guards
      assert(coordinates?.x);
      assert(coordinates?.__typename);
    });
  });
  it('interface types chain syntax', async function () {
    withServer(async () => {
      const { data: res } = await client.query({
        coordinates: {
          // x: 1,
          x: 1,
          on_Bank: { address: 1 },
        },
      });
      let coordinates = res?.coordinates;
      expectType<Maybe<string>>(coordinates?.x);
      if (coordinates && 'address' in coordinates) {
        expectType<Maybe<string>>(coordinates?.address);
        assert(coordinates?.address);
        assert(coordinates?.x);
      }
    });
  });
  it('multiple interfaces types normal syntax', async function () {
    withServer(async () => {
      const { data: res } = await client.query({
        coordinates: {
          __typename: 1,
          on_Bank: {
            address: 1,
            x: 1,
          },
          on_House: {
            y: 1,
            x: 1,
            owner: {
              name: 1,
            },
          },
        },
      });
      let coordinates = res?.coordinates;
      // console.log(coordinates);

      expectType<Maybe<string>>(coordinates?.x);
      expectType<Maybe<Point>>(coordinates);
      expectType<Maybe<string>>(coordinates?.__typename);
      assert(coordinates?.x);
      assert(coordinates?.__typename);

      if ('address' in coordinates) {
        coordinates?.address;
        coordinates?.x;
      } else if (isHouse(coordinates)) {
        coordinates?.owner;
        coordinates?.x;
        coordinates?.y;
      }
    });
  });
  it('batches requests', async function () {
    withServer(async () => {
      let batchedQueryLength = -1;
      const client = createClient({
        url: URL,
        batch: true,
        fetcherMethod: async (body) => {
          batchedQueryLength = Array.isArray(body) ? body.length : -1;
          try {
            const res = await axios({
              url: URL,
              headers: {
                'Content-Type': 'application/json',
              },
              method: 'POST',
              data: JSON.stringify(body),
            });
            return res.data;
          } catch (e: any) {
            return e.response?.data;
          }
        },
      });

      const res = await Promise.all([
        client.query({
          coordinates: {
            __typename: 1,
            x: 1,
          },
        }),
        client.query({
          coordinates: {
            __typename: 1,
            y: 1,
          },
        }),
      ]);
      // console.log(JSON.stringify(res, null, 2));
      assert.strictEqual(res?.length, 2);
      assert.strictEqual(batchedQueryLength, 2);
    });
  });
  it('headers function gets called every time', async function () {
    withServer(async () => {
      let headersCalledNTimes = 0;
      const client = createClient({
        url: URL,
        headers: () => {
          headersCalledNTimes++;
          return {};
        },
      });

      await client.query({
        coordinates: {
          __typename: 1,
          x: 1,
        },
      });
      await client.query({
        coordinates: {
          __typename: 1,
          y: 1,
        },
      });

      assert.strictEqual(headersCalledNTimes, 2);
    });
  });
  it('async headers function gets called every time', async function () {
    withServer(async () => {
      let headersCalledNTimes = 0;
      const client = createClient({
        url: URL,
        headers: async () => {
          headersCalledNTimes++;
          return {};
        },
      });

      await client.query({
        coordinates: {
          __typename: 1,
          x: 1,
        },
      });
      await client.query({
        coordinates: {
          __typename: 1,
          y: 1,
        },
      });

      assert.strictEqual(headersCalledNTimes, 2);
    });
  });
});

describe('execute subscriptions', async function () {
  const x: DeepPartial<User> = {
    name: 'John',
  };
  const pubsub = new PubSub();
  const USER_EVENT = 'userxxx';

  let stop;
  let subUrl;
  beforeEach(async () => {
    const { SUB_URL, PORT } = getUrls();
    subUrl = SUB_URL;
    const makeServer = () =>
      server({
        port: PORT,
        resolvers: {
          Subscription: {
            user: {
              subscribe: () => {
                return pubsub.asyncIterator([USER_EVENT]);
              },
            },
          },
        },
      });
    stop = await makeServer();
  });

  afterEach(async () => {
    subUrl = '';
    await stop();
  });

  it('simple subscription', async () => {
    const client = createClient({
      url: subUrl,
    });

    const sub = client
      .subscription({
        user: {
          name: true,
          common: 1,
          __typename: true,
        },
      })
      .subscribe({
        next: ({ data: x }) => {
          // console.log(JSON.stringify(x, null, 2));
          expectType<Maybe<string>>(x?.user?.name);
          expectType<Maybe<string>>(x?.user?.__typename);
          expectType<Maybe<number>>(x?.user?.common);
          // console.log(x);
        },
        complete: () => console.log('complete'),
        error: console.error,
      });

    await sleep(1000);
    await pubsub.publish(USER_EVENT, { user: x });
    // console.log(JSON.stringify(res, null, 2))
    sub.unsubscribe();
    client?.wsClient?.dispose();
    await stop();
    // assert(deepEq(res.user, x))
  });

  it('headers function gets called', async () => {
    let headersCalledNTimes = 0;

    const client = createClient({
      url: subUrl,
      subscription: {
        headers: async () => {
          headersCalledNTimes++;
          return {};
        },
      },
    });

    let subscribeCalledNTimes = 0;
    const sub = client
      .subscription({
        user: {
          name: true,
          common: 1,
          __typename: true,
        },
      })
      .subscribe({
        next: ({ data: x }) => {
          expectType<Maybe<string>>(x?.user?.name);
          expectType<Maybe<string>>(x?.user?.__typename);
          expectType<Maybe<number>>(x?.user?.common);
          // console.log(x);
          subscribeCalledNTimes++;
        },
        complete: () => console.log('complete'),
        error: console.error,
      });

    await sleep(100);
    await pubsub.publish(USER_EVENT, { user: x });
    await pubsub.publish(USER_EVENT, { user: x });
    await sleep(100);
    assert.strictEqual(subscribeCalledNTimes, 2, 'subscribeCalledNTimes');
    // console.log(JSON.stringify(res, null, 2))
    sub.unsubscribe();
    client.wsClient!.dispose();
    await stop();
    assert.strictEqual(headersCalledNTimes, 1);
  });
});
