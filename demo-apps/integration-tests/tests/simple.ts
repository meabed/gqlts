import { enumSomeEnum, everything, generateQueryOp, generateSubscriptionOp } from '../generated';
import assert from 'assert';
import snapshot from 'snap-shot-it';
import { expectType } from 'tsd';
import { format } from 'prettier';

const prettify = async (code, parser) => await format(code, { parser });

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
    snapshot(await prettify(query, 'graphql'));
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
    snapshot(await prettify(query, 'graphql'));
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
    snapshot(await prettify(query, 'graphql'));
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
    snapshot(await prettify(query, 'graphql'));
  });
  it('subscriptions', async () => {
    const { query } = generateSubscriptionOp({
      user: {
        __scalar: true,
      },
    });
    snapshot(await prettify(query, 'graphql'));
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
    snapshot(await prettify(query, 'graphql'));
  });
  it('do not fetch falsy fields', async () => {
    const { query } = generateSubscriptionOp({
      user: {
        common: false,
        name: true,
      },
    });
    // assert.strictEqual(op.name, NAME)
    snapshot(await prettify(query, 'graphql'));
  });
  it('do not fetch falsy fields with __scalar', async () => {
    const { query } = generateSubscriptionOp({
      user: {
        common: false,
        __scalar: true,
      },
    });
    // assert.strictEqual(op.name, NAME)
    snapshot(await prettify(query, 'graphql'));
  });
});
