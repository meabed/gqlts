/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: require('node:path').resolve(__dirname, '..', '..'),
  },
};

module.exports = nextConfig;
