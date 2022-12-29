import { GraphQLArgument, GraphQLEnumValue, GraphQLField, GraphQLInputField, GraphQLNamedType } from 'graphql';

export function comment(comment: { text?: string | null; deprecated?: string | null }) {
  const lines: string[] = [];

  if (comment.deprecated) {
    lines.push(`@deprecated ${comment.deprecated.replace(/\s/g, ' ')}`);
  }

  if (comment.text) {
    lines.push(...comment.text.split('\n'));
  }

  return lines.length > 0
    ? lines.length === 1
      ? `\n/** ${lines[0]} */\n`
      : `\n/**\n${lines.map((l) => ` * ${l}`).join('\n')}\n */\n`
    : '';
}

export function typeComment(type: GraphQLNamedType) {
  return comment({
    text: type.description,
  });
}

export function fieldComment(field: GraphQLEnumValue | GraphQLField<any, any, any>) {
  return comment({
    deprecated: field.deprecationReason,
    text: field.description,
  });
}

export function argumentComment(arg: GraphQLArgument | GraphQLInputField) {
  return comment({
    text: arg.description,
  });
}
