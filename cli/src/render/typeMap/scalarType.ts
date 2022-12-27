import { RenderContext } from '../common/RenderContext';
import { Type } from '@gqlts/runtime/dist/types';
import { GraphQLEnumType, GraphQLScalarType } from 'graphql';

export function scalarType(type: GraphQLScalarType | GraphQLEnumType, _: RenderContext): Type<string> {
  return {};
}
