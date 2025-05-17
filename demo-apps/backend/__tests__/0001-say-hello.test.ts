import { apiFlowGraphQLClient } from './helpers';

describe('sayHello', () => {
  it('should return hello', async () => {
    const { data, errors } = await apiFlowGraphQLClient.query({
      v1SatHello: [{ name: 'John Connor' }, { message: 1 }],
    });
    expect(errors).toBeUndefined();
    expect(data?.v1SatHello.message).toEqual('Hello John Connor');
  });

  it('should return hello and not fail with extra variable without typing check - variableInServerButNotInSchema', async () => {
    const { data, errors } = await apiFlowGraphQLClient.query({
      v1SatHello: [{ name: 'John Connor', suffix: 'variableInServerButNotInSchema' }, { message: 1 }],
    });
    expect(errors).toBeUndefined();
    expect(data?.v1SatHello.message).toEqual('Hello John Connor');
  });

  it('should return hello with headers', async () => {
    const { data, errors } = await apiFlowGraphQLClient.query(
      {
        v1SatHello: [{ name: 'John Connor' }, { message: 1 }],
      },
      {
        headers: {
          'x-my-secret': 'Sarah Connor',
        },
      },
    );
    expect(errors).toBeUndefined();
    expect(data?.v1SatHello.message).toEqual('Hello John Connor - your secret is Sarah Connor');
  });
});
