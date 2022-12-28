import { buildSdk } from '../sdk/build-sdk';

export default async () => {
  await buildSdk({ skipIfExists: true });
};
