import { GraphQLEnumType, GraphQLScalarType } from 'graphql';

import { RenderContext } from '../common/RenderContext';
import type { Type } from './types';

export function scalarType(type: GraphQLScalarType | GraphQLEnumType, _: RenderContext): Type<string> {
  return {};
}
