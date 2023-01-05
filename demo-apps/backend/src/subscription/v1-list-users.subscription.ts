import { arg, objectType, subscriptionField } from 'nexus';

const input = {
  name: arg({ type: 'String', required: true }),
};

const output = objectType({
  name: 'v1ListUsersOutput',
  definition(t) {
    t.field('name', { type: 'String' });
  },
});

export const field = subscriptionField('v1ListUsers', {
  type: output,
  args: input,
  required: true,
  async resolve(_root, args, ctx, _info) {
    const { name } = args;
    return {};
  },
  async subscribe(_root, args, ctx, _info) {
    const { name } = args;
    return undefined;
  },
});

export const v1ListUsersSubscription = {
  field,
  input,
  output,
};
