#!/usr/bin/env bash
set -e
my_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $my_dir/backend
yarn install --frozen-lockfile
yarn dev --exit-after-generate-schema
yarn build-sdk
yarn typecheck
yarn build
yarn start --exit-after-generate-schema
yarn test


# test the standalone bundle
pkill -f "node dist/index.js" || true
nohup yarn start &
cd $my_dir/html
yarn install --frozen-lockfile
yarn test
pkill -f "node dist/index.js" || true


# test react nextjs app with sdk ( ssr / csr / api routes )
cd $my_dir/next
yarn install --frozen-lockfile
