import { GraphQLError } from 'graphql';
import { arg, mutationField, objectType } from 'nexus';

const input = {
  image: arg({
    type: 'File',
  }),
};

const output = objectType({
  name: 'v1UpdateProfileImageOutput',
  definition(t) {
    t.field('success', { type: 'Boolean' });
    t.field('url', { type: 'String' });
  },
});

export const field = mutationField('v1UpdateProfileImage', {
  type: output,
  required: true,
  args: input,
  async resolve(_root, args, ctx, _info) {
    const { image } = args;
    let url = null;
    try {
      if (image) {
        const text = await image.text();
        url = `image-${text.length}-${Date.now()}`;
      }
    } catch (err) {
      console.error(err);
      throw new GraphQLError('Error');
    }

    //
    return { success: true, url };
  },
});

export const v1UpdateProfileImage = {
  field,
  input,
  output,
};
