import { RenderContext } from '../common/RenderContext';
import { GraphQLSchema, printSchema } from 'graphql';

export function renderSchema(schema: GraphQLSchema, ctx: RenderContext) {
  ctx.addCodeBlock(printSchema(schema));
}
