import { Account, Point, User, createClient, everything, isHouse, isUser } from '../generated';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloServer } from 'apollo-server-express';
import assert from 'assert';
import sleep from 'await-sleep';
import axios from 'axios';
import express from 'express';
import fs from 'fs';
import { PubSub } from 'graphql-subscriptions';
import { useServer } from 'graphql-ws/lib/use/ws';
import { createServer } from 'http';
import path from 'path';
import { expectType } from 'tsd';
import { DeepPartial } from 'tsdef';
import { WebSocketServer } from 'ws';

const id = () => null;

const PORT = 8099;
const URL = `http://localhost:` + PORT + '/graphql';
const SUB_URL = `ws://localhost:` + PORT + '/graphql';
type Maybe<T> = T | undefined | null;

async function server({ resolvers, port = PORT }) {
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
      plugins: [
        {
          async serverWillStart() {
            return {
              async drainServer() {
                subscriptionServer.dispose();
              },
            };
          },
        },
      ],
    });
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });
    await httpServer.listen(port).on('listening', () => {
      console.log(`🚀  Server ready at ${URL} and ${SUB_URL}`);
    });
    return async () => httpServer.close() && (await server.stop());
  } catch (e) {
    console.error('server had an error: ' + e);
    return () => null;
  }
}

describe('execute queries', async function () {
  const x: DeepPartial<User> = {
    name: 'John',
  };

  const makeServer = () =>
    server({
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
  const withServer = (func: any) => async () => {
    const stop = await makeServer();
    try {
      await func();
    } catch (e) {
      console.log('catch');
      console.error({ e });
      throw e;
    } finally {
      await stop();
    }
  };

  let client = createClient({
    url: URL,
    headers: () => ({ Auth: 'xxx' }),
  });

  it(
    'simple ',
    withServer(async () => {
      const { data: res } = await client.query({
        user: {
          name: true,
        },
      });
      console.log(JSON.stringify(res, null, 2));
      assert.deepStrictEqual(res?.user, x);
    })
  );
  it(
    '__typename is not optional',
    withServer(async () => {
      const { data: res } = await client.query({
        user: {
          name: true,
          __typename: true,
        },
      });
      expectType<string | undefined>(res?.user!.__typename);
    })
  );

  it(
    'scalar value with argument ',
    withServer(async () => {
      const { data: res } = await client.query({
        someScalarValue: true,
      });
      assert(res?.someScalarValue?.toLocaleLowerCase);
      const { data: res2 } = await client.query({
        someScalarValue: [{ x: 3 }],
      });
      assert(res2?.someScalarValue?.toLocaleLowerCase);
    })
  );
  it(
    'falsy values are not fetched ',
    withServer(async () => {
      const { data: res } = await client.query({
        coordinates: {
          x: false,
          y: true,
        },
      });
      console.log(JSON.stringify(res, null, 2));
      assert(res?.coordinates?.x === undefined);
      assert(res?.coordinates?.y !== undefined);
    })
  );

  it(
    'required field and nested fields',
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
      console.log(JSON.stringify(res, null, 2));
      // @ts-expect-error because top level fields are filtered based on query
      res?.account;
      // no optional chaining because repository is non-null
      expectType<string | undefined>(res?.repository.createdAt);
      expectType<Maybe<string>>(res?.repository.__typename);
      expectType<Maybe<Maybe<string>[]>>(res?.repository?.forks?.edges?.map((x) => x?.node?.name));
      expectType<Maybe<Maybe<number>[]>>(res?.repository?.forks?.edges?.map((x) => x?.node?.number));
    })
  );
  it(
    'chain syntax ',
    withServer(async () => {
      const { data: res } = await client.query({
        user: {
          __scalar: true,
          // sdf: true,
        },
      });
      console.log(JSON.stringify(res, null, 2));
      expectType<Maybe<string>>(res?.user?.name);
      expectType<Maybe<number>>(res?.user?.common);
      expectType<Maybe<string>>(res?.user?.__typename);
    })
  );
  it(
    'recursive type chain syntax ',
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
      console.log(JSON.stringify(res, null, 2));
      expectType<Maybe<string>>(res?.[0]?.recurse?.recurse?.value);
      expectType<Maybe<string>>(res?.[0]?.recurse?.recurse?.recurse?.value);
      expectType<Maybe<string>>(res?.[0]?.recurse?.recurse?.value);
    })
  );

  it(
    'union types only 1 on_ normal syntax',
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
      console.log(account);
    })
  );

  it(
    'union types chain syntax',
    withServer(async () => {
      const { data: res } = await client.query({
        account: {
          on_User: { name: 1 },
        },
      });
      expectType<Maybe<Account>>(res?.account);
    })
  );
  it(
    'chain syntax result type only has requested fields',
    withServer(async () => {
      const { data: res } = await client.query({ repository: [{ name: '' }, { createdAt: 1 }] });
      expectType<string | undefined>(res?.repository?.createdAt);
      // @ts-expect-error
      res?.forks;
    })
  );
  it(
    'union types with chain and ...everything',
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
    })
  );
  it(
    'many union types',
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
    })
  );
  it(
    'ability to query interfaces that a union implements',
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
    })
  );
  it(
    'ability to query interfaces that a union implements, chain syntax',
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
    })
  );
  it(
    'interface types normal syntax',
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
    })
  );
  it(
    'interface types chain syntax',
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
    })
  );
  it(
    'multiple interfaces types normal syntax',
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
      console.log(coordinates);

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
    })
  );
  it(
    'batches requests',
    withServer(async () => {
      let batchedQueryLength = -1;
      const client = createClient({
        url: URL,
        batch: true,
        fetcherMethod: async (body) => {
          console.log({ body });
          batchedQueryLength = Array.isArray(body) ? body.length : -1;
          const res = await axios({
            url: URL,
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
            data: JSON.stringify(body),
          });
          return res.data;
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
      console.log(JSON.stringify(res, null, 2));
      assert.strictEqual(res?.length, 2);
      assert.strictEqual(batchedQueryLength, 2);
    })
  );
  it(
    'headers function gets called every time',
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
    })
  );
  it(
    'async headers function gets called every time',
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
    })
  );
});

describe('execute subscriptions', async function () {
  const x: DeepPartial<User> = {
    name: 'John',
  };
  const pubsub = new PubSub();
  const USER_EVENT = 'userxxx';

  const makeServer = () =>
    server({
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

  it('simple ', async () => {
    const client = createClient({
      url: SUB_URL,
    });

    const stop = await makeServer();
    // await pubsub.publish(USER_EVENT, { user: x })
    await sleep(100);
    const sub = await client
      .subscription({
        user: {
          name: true,
          common: 1,
          __typename: true,
        },
      })
      .subscribe({
        next: ({ data: x }) => {
          console.log(JSON.stringify(x, null, 2));
          expectType<Maybe<string>>(x?.user?.name);
          expectType<Maybe<string>>(x?.user?.__typename);
          expectType<Maybe<number>>(x?.user?.common);
          console.log(x);
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
      url: SUB_URL,
      subscription: {
        headers: async () => {
          headersCalledNTimes++;
          return {};
        },
      },
    });
    const stop = await makeServer();
    // await pubsub.publish(USER_EVENT, { user: x })
    await sleep(100);
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
          console.log(x);
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
