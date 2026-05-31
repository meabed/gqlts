import { beforeAll } from 'bun:test';

import { buildSdk } from '../sdk/build-sdk';

beforeAll(async () => {
  await buildSdk({ skipIfExists: true });
});
