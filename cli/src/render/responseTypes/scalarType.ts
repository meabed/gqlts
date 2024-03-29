import { RenderContext } from '../common/RenderContext';
import { getTypeMappedAlias } from './typeMappedAlias';
import { GraphQLScalarType } from 'graphql';

export function renderScalarTypes(ctx: RenderContext, types: GraphQLScalarType[]) {
  let content = '';
  types.forEach((type) => {
    content += `    ${type.name}: ${getTypeMappedAlias(type, ctx)},\n`;
  });
  return `export type Scalars = {\n${content}}`;
}
