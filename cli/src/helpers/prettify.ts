import { BuiltInParserName } from 'prettier';
import * as parserGraphql from 'prettier/plugins/graphql';
import * as parserTS from 'prettier/plugins/typescript';
import { format } from 'prettier/standalone';
// @ts-ignore
import * as prettierPluginEstree from 'prettier/plugins/estree';

export async function prettify(code: string, parser?: BuiltInParserName) {
  // return code
  return format(code, {
    parser,
    plugins: [parserGraphql, parserTS, prettierPluginEstree],
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 80,
  });
}
