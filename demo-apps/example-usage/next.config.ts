// Tell webpack to compile the "bar" package
// https://www.npmjs.com/package/next-transpile-modules
import { NextConfig } from 'next';

const config: NextConfig = {
  compiler: {
    removeConsole: false,
  },
};

export default config;
