import { arg, objectType, queryField } from 'nexus';

const input = {
  name: arg({ type: 'String', required: true }),
};

const output = objectType({
  name: 'v1SatHelloOutput',
  definition(t) {
    t.field('message', { type: 'String' });
  },
});

export const field = queryField('v1SatHello', {
  type: output,
  required: true,
  args: input,
  async resolve(_root, args, ctx, _info) {
    const { name } = args;

    return { message: `Hello ${name}` };
  },
});

export const v1SatHello = {
  field,
  input,
  output,
};
