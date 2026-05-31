import type { LinkedType } from '../../types';
import { generateGraphqlOperation } from '../generateGraphqlOperation';

const userType: LinkedType = {
  name: 'User',
  fields: {
    id: {
      type: {
        name: 'ID',
      },
    },
    name: {
      type: {
        name: 'String',
      },
    },
  },
  scalar: ['id', 'name'],
};

const queryRoot: LinkedType = {
  name: 'Query',
  fields: {
    user: {
      type: userType,
      args: {
        id: [userType, 'ID!'],
      },
    },
  },
};

test('prints field aliases with arguments and selections', () => {
  const operation = generateGraphqlOperation('query', queryRoot, {
    __name: 'AliasedUsers',
    user: {
      id: true,
    },
    __alias: {
      primary: {
        user: [
          {
            id: 'user-1',
          },
          {
            id: true,
            name: true,
          },
        ],
      },
      secondary: {
        user: {
          name: true,
        },
      },
    },
  });

  expect(operation).toEqual({
    query: 'query AliasedUsers($v1:ID!){user{id},primary:user(id:$v1){id,name},secondary:user{name}}',
    variables: {
      v1: 'user-1',
    },
  });
});
