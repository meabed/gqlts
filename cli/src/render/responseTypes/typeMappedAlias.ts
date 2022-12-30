import { RenderContext } from '../common/RenderContext';
import { GraphQLNamedType } from 'graphql';

const knownTypes: {
  [name: string]: string;
} = {
  Int: 'number',
  Float: 'number',
  String: 'string',
  Boolean: 'boolean',
  ID: 'string',
};

export function getTypeMappedAlias(type: GraphQLNamedType, ctx: RenderContext) {
  const map = { ...knownTypes, ...(ctx?.config?.scalarTypes || {}) };
  return map?.[type.name] || 'any';
}

// export const renderTypeMappedAlias = (
//     type: GraphQLNamedType,
//     ctx: RenderContext,
// ) => {
//     const mappedType = getTypeMappedAlias(type, ctx)
//     if (mappedType) {
//         ctx.addCodeBlock(
//             `${typeComment(type)}export type ${type.name} = ${mappedType}`,
//         )
//     }
// }
