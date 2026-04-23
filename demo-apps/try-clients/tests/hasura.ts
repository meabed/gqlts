import { createClient, everything, generateSubscriptionOp } from '../hasura/generated/index.js';
import assert from 'assert';

describe('hasura', () => {
  const user = {
    id: 1,
    username: 'John',
    last_seen: new Date().toISOString(),
  };
  const client = createClient({
    fetcherInstance: {},
    fetcherMethod: async (op) => {
      assert(!Array.isArray(op));
      assert.equal(typeof op.query, 'string');
      return { data: { user: [user], insert_user: { returning: [user] }, delete_user: { returning: [user] } } };
    },
  });
  const id = 4;

  it('simple normal syntax', async () => {
    const res3 = await client.mutation({
      delete_user: [{ where: { id: { _eq: id } } }, { returning: { ...everything } }],
    });
    const res1 = await client.mutation({
      insert_user: [
        {
          objects: [
            {
              id: 1,
              username: 'John',
              last_seen: new Date(),
            },
          ],
        },
        { ...everything, returning: { ...everything } },
      ],
    });

    const res2 = await client.query({
      user: {
        ...everything,
      },
    });

    const subscriptionOp = generateSubscriptionOp({
      user: [{ limit: 4 }, { ...everything }],
    });

    assert.deepEqual(res3.data?.delete_user?.returning, [user]);
    assert.deepEqual(res1.data?.insert_user?.returning, [user]);
    assert.deepEqual(res2.data?.user, [user]);
    assert.match(subscriptionOp.query, /subscription/);
    assert.match(subscriptionOp.query, /user/);
  });
});
