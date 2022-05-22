import { GraphQLEnumType } from "graphql";
import { typeComment } from "../common/comment";
import { RenderContext } from "../common/RenderContext";

export function enumType(type: GraphQLEnumType, ctx: RenderContext) {
  const values = type.getValues().map((v) => `'${v.name}'`);
  ctx.addCodeBlock(`${typeComment(type)}export type ${type.name} = ${values.join(" | ")}`);
}
