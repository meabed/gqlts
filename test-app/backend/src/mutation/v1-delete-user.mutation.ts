import { arg, mutationField, objectType } from 'nexus';

const input = {
  name: arg({ type: 'String', required: true }),
};

const output = objectType({
  name: 'v1DeleteUserOutput',
  definition(t) {
    t.field('name', { type: 'String' });
  },
});

export const field = mutationField('v1DeleteUser', {
  type: output,
  required: true,
  args: input,
  async resolve(_root, args, ctx, _info) {
    const { name } = args;

    return {};
  },
});

export const v1DeleteUser = {
  field,
  input,
  output,
};
