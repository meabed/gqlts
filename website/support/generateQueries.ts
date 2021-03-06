import { print } from "@gqlts/cli/src/printer";
import { GraphQLSchema } from "graphql";
import { generateRandomQuery } from "ibm-graphql-query-generator";

export function generateQueries(p: { packageName: string; number?: number; schema: GraphQLSchema }) {
  p.number = p.number || 1;
  let code = `import { createClient } from '${p.packageName}'\n`;
  code += `const client = createClient()\n`;
  for (let i = 0; i <= p.number; i++) {
    code += "\n\n\n";
    const { queryDocument, variableValues, seed } = generateRandomQuery(p.schema, {
      // seed: 2,
      providerMap: {
        "*__*__limit": "number",
        "*__*__max": "number",
        "*__*__id": "string",
        "*__*__username": "string",
        "*__*__*": "string",
      },
    });

    code += print(queryDocument, {
      clientVarName: "client",
      transformVariableName,
      thenCode,
    });
  }
  return code;
}

const thenCode = "x => console.log(JSON.stringify(x, null, 4))";

const transformVariableName = (x) => {
  return x.replace("Query__", "").replace("Mutation__", "").replace("Subscription__", "");
};
