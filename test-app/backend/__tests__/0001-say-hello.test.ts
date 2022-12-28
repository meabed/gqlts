import { apiFlowGraphQLClient } from './helpers';

describe('sayHello', () => {
  it('should return hello', async () => {
    const { data, errors } = await apiFlowGraphQLClient.query({
      v1SatHello: [{ name: 'myName' }, { message: 1 }],
    });
    expect(errors).toBeUndefined();
    expect(data?.v1SatHello.message).toEqual('Hello myName');
  });
});
