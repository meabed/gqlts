import assert from 'assert';
import { describe, it } from 'bun:test';

import { parse, print } from 'graphql';
import { expectType } from 'tsd';

import { enumSomeEnum, everything, generateQueryOp, generateSubscriptionOp } from '../generated/index.js';

const snapshots = require('../__snapshots__/simple.ts.js') as Record<string, string>;
const prettifyGraphql = (code: string) => print(parse(code));
const assertSnapshot = (name: string, value: string) => {
  assert.strictEqual(value, prettifyGraphql(snapshots[`generate queries ${name} 1`]));
};

describe('generate queries', () => {
  it('enum string is present', () => {
    expectType<'X'>(enumSomeEnum.X);
    assert.strictEqual(enumSomeEnum.X, 'X');
    assert.strictEqual(enumSomeEnum.Y, 'Y');
  });
  it('query', async () => {
    const { query } = generateQueryOp({
      repository: [
        {
          name: 'repo',
          owner: 'owner',
        },
        {
          createdAt: true,
          forks: {
            edges: {
              cursor: true,
              node: {
                ...everything,
              },
            },
          },
        },
      ],
    });
    assertSnapshot('query', prettifyGraphql(query));
  });
  it('recursive type', async () => {
    const { query } = generateQueryOp({
      recursiveType: {
        value: 1,
        recurse: {
          ...everything,
          recurse: {
            value: 1,
            recurse: {
              ...everything,
              recurse: {
                ...everything,
              },
            },
          },
        },
      },
    });
    assertSnapshot('recursive type', prettifyGraphql(query));
  });
  it('recursive type with args', async () => {
    const { query } = generateQueryOp({
      recursiveType: [
        { requiredVal: ['ciao'] },
        {
          value: 1,
          recurse: {
            ...everything,
            recurse: {
              value: 1,
              recurse: {
                ...everything,
                recurse: {
                  ...everything,
                },
              },
            },
          },
        },
      ],
    });
    assertSnapshot('recursive type with args', prettifyGraphql(query));
  });

  it('use __name operation name', async () => {
    const NAME = 'SomeName';
    const { query } = generateSubscriptionOp({
      __name: NAME,
      user: {
        __scalar: true,
      },
    });
    // assert.strictEqual(op.name, NAME)
    assertSnapshot('use __name operation name', prettifyGraphql(query));
  });
  it('subscriptions', async () => {
    const { query } = generateSubscriptionOp({
      user: {
        __scalar: true,
      },
    });
    assertSnapshot('subscriptions', prettifyGraphql(query));
  });
  it('many', async () => {
    const { query } = generateQueryOp({
      repository: [
        {
          name: 'repo',
          owner: 'owner',
        },
        {
          createdAt: true,
          forks: {
            edges: {
              cursor: true,
              node: {
                ...everything,
              },
            },
          },
        },
      ],
      user: {
        ...everything,
      },
    });
    assertSnapshot('many', prettifyGraphql(query));
  });
  it('do not fetch falsy fields', async () => {
    const { query } = generateSubscriptionOp({
      user: {
        common: false,
        name: true,
      },
    });
    // assert.strictEqual(op.name, NAME)
    assertSnapshot('do not fetch falsy fields', prettifyGraphql(query));
  });
  it('do not fetch falsy fields with __scalar', async () => {
    const { query } = generateSubscriptionOp({
      user: {
        common: false,
        __scalar: true,
      },
    });
    // assert.strictEqual(op.name, NAME)
    assertSnapshot('do not fetch falsy fields with __scalar', prettifyGraphql(query));
  });
});
