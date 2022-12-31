import { createClient, getServiceUrl } from 'demo-apps-backend-sdk';

const { graphqlUrl } = getServiceUrl('local');
export const demoAppsBackendSdk = createClient({
  url: graphqlUrl || 'http://localhost:4000/graphql',
});
