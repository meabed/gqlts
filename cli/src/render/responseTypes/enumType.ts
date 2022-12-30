import { RenderContext } from '../common/RenderContext';
import { typeComment } from '../common/comment';
import { GraphQLEnumType } from 'graphql';

export function enumType(type: GraphQLEnumType, ctx: RenderContext) {
  const values = type.getValues().map((v) => `'${v.name}'`);
  ctx.addCodeBlock(`${typeComment(type)}export type ${type.name} = ${values.join(' | ')}`);
}
