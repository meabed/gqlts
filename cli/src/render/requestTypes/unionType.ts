import { RenderContext } from '../common/RenderContext';
import { typeComment } from '../common/comment';
import { requestTypeName } from './requestTypeName';
import { GraphQLUnionType } from 'graphql';
import { flatten, uniq } from 'lodash';

export function unionType(type: GraphQLUnionType, ctx: RenderContext) {
  let types = type.getTypes();
  if (ctx.config?.sortProperties) {
    // todo fix in new graphql version
    // types = types.sort();
  }
  const fieldStrings = types.map((t) => `on_${t.name}?:${requestTypeName(t)}`);

  const commonInterfaces = uniq(flatten(types.map((x) => x.getInterfaces())));
  fieldStrings.push(
    ...commonInterfaces.map((type) => {
      return `on_${type.name}?: ${requestTypeName(type)}`;
    }),
  );

  fieldStrings.push('__typename?: boolean | number');

  ctx.addCodeBlock(
    `${typeComment(type)}export interface ${requestTypeName(type)}{\n${fieldStrings
      .map((x) => '    ' + x)
      .join(',\n')}\n}`,
  );
}
