import prettier from "prettier/standalone";
import { BuiltInParserName } from "prettier";
import parserGraphql from "prettier/parser-graphql";
import parserTS from "prettier/parser-typescript";

export function prettify(code: string, parser?: BuiltInParserName) {
  // return code
  return prettier.format(code, {
    parser,
    plugins: [parserGraphql, parserTS],
    semi: false,
    singleQuote: true,
    trailingComma: "all",
    printWidth: 80,
  });
}
