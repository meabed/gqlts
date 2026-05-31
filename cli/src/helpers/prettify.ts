import { parse, print } from 'graphql';

export type FormatterParser = 'babel' | 'graphql' | 'typescript';

export async function prettify(code: string, parser: FormatterParser = 'typescript') {
  if (parser === 'graphql') {
    return print(parse(code));
  }

  const { format } = await import('oxfmt');
  const result = await format(parser === 'babel' ? 'generated.js' : 'generated.ts', code, {
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 80,
  });

  if (result.errors.length > 0) {
    const error = result.errors[0];
    throw new Error(error.codeframe || error.message);
  }

  return result.code;
}
