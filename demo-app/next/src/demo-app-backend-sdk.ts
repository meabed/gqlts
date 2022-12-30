import { createClient, getServiceUrl } from 'demo-app-backend-sdk';

const { graphqlUrl } = getServiceUrl('local');

export const demoAppBackendSdk = createClient({
  url: graphqlUrl || 'http://localhost:4000/graphql',
});
