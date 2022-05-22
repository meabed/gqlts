import { GraphQLSchema, printSchema } from "graphql";
import { RenderContext } from "../common/RenderContext";

export function renderSchema(schema: GraphQLSchema, ctx: RenderContext) {
  ctx.addCodeBlock(printSchema(schema));
}
