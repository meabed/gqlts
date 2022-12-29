import { apiFlowGraphQLClient } from './helpers';

describe('sayHello', () => {
  it('should return hello', async () => {
    const { data, errors } = await apiFlowGraphQLClient.query({
      v1SatHello: [{ name: 'myName' }, { message: 1 }],
    });
    expect(errors).toBeUndefined();
    expect(data?.v1SatHello.message).toEqual('Hello myName');
  });
  it('should return hello with headers', async () => {
    const { data, errors } = await apiFlowGraphQLClient.query(
      {
        v1SatHello: [{ name: 'myName' }, { message: 1 }],
      },
      {
        headers: {
          'x-my-secret': 'mySecret',
        },
      }
    );
    expect(errors).toBeUndefined();
    expect(data?.v1SatHello.message).toEqual('Hello myName - your secret is mySecret');
  });
});
