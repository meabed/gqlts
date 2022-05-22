import { GraphQLNamedType } from "graphql";

export function requestTypeName(type: GraphQLNamedType) {
  return `${type.name}Request`;
}
