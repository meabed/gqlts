import { createClient, everything } from '../github/generated';
import { AxiosInstance } from 'axios';

describe('github', () => {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error('you need to provide a GITHUB_TOKEN as env to run this test');
  }
  const client = createClient({
    url: 'https://api.github.com/graphql',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  // example of assigning a custom fetcher and interceptor ( Axios Based )
  const axiosClient = client.fetcherInstance as AxiosInstance;
  axiosClient.interceptors.request.use(
    (config) => {
      console.log(config);
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
  it('simple normal syntax', async () => {
    const res1 = await client.query({
      repository: [
        {
          name: 'gqlts',
          owner: 'remorses',
        },
        {
          ...everything,
          codeOfConduct: {
            body: true,
          },
        },
      ],
    });
    console.log(res1);
  });
});
