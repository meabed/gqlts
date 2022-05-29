import { GraphQLEnumType, GraphQLScalarType } from "graphql";
import { RenderContext } from "../common/RenderContext";
import { Type } from "@gqlts/runtime/dist/types";

export function scalarType(type: GraphQLScalarType | GraphQLEnumType, _: RenderContext): Type<string> {
  return {};
}
