import { print } from '@gqlts/cli/dist/printer';
import { GraphQLSchema, buildSchema } from 'graphql';
import { generateRandomQuery } from 'ibm-graphql-query-generator';

export function generateQueriesHelper(p: { packageName: string; number?: number; schema: GraphQLSchema }) {
  p.number = p.number || 1;
  let code = `import { createClient } from '${p.packageName}'\n`;
  code += `const client = createClient()\n`;
  for (let i = 0; i <= p.number; i++) {
    code += '\n\n\n';
    const { queryDocument, variableValues, seed } = generateRandomQuery(p.schema, {
      // seed: 2,
      providerMap: {
        '*__*__limit': 'number',
        '*__*__max': 'number',
        '*__*__id': 'string',
        '*__*__username': 'string',
        '*__*__*': 'string',
      },
    });

    code += print(queryDocument, {
      clientVarName: 'client',
      transformVariableName,
      thenCode,
    });
  }
  return code;
}

const thenCode = 'x => console.log(JSON.stringify(x, null, 4))';

const transformVariableName = (x) => {
  return x.replace('Query__', '').replace('Mutation__', '').replace('Subscription__', '');
};

it('generateQueries', async () => {
  const q = generateQueriesHelper({
    schema,
    packageName: 'gqlts',
  });
  // console.log(q);
});

const schema = buildSchema(`
interface Node {
    id: ID
  }

  enum Choice {
    ONE,
    TWO,
    THREE
  }

  type User implements Node {
    name: String
    company(id: String): Company
    employerCompany: Company
    pastEmployers(max: Int! = 1): [Company]
    id: ID
  }

  type DirectorConnection {
    ceos: [User],
    cursor: ID
  }

  type Nested {
    user: User
  }

  type Company implements Node {
    name: String
    nested: Nested
    legalForm: String
    ceo: User
    id: ID
    employees(limit: Int! = 1): [User]
    directors(limit: Int! = 1): DirectorConnection,
    choice: Choice
  }

  type Query {
    user(username: String!, choice: Choice!): User
    users(limit: Int! = 1, first: Int = 1, last: Int = 1): [User]
    company(id: String!, max: Int! = 1): Company
    node(id: ID): Node
    other(_id: ID!): String
  }

  schema {
    query: Query
  }`);
