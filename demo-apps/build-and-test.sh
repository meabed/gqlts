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
cd $my_dir/html
yarn install --frozen-lockfile
npx --yes concurrently --kill-others --success first --names "backend,frontend" \
  "cd $my_dir/backend && yarn start" \
  "cd $my_dir/html && yarn test"

# test react nextjs app with sdk ( ssr / csr / api routes )
cd $my_dir/next
yarn install --frozen-lockfile
npx --yes concurrently --no-install --kill-others --success first --names "backend,frontend" \
  "cd $my_dir/backend && yarn start" \
  "cd $my_dir/next && yarn dev" \
  "cd $my_dir/next && yarn test"

# test with production build
cd $my_dir/next
yarn build
npx --yes concurrently --no-install --kill-others --success first --names "backend,frontend" \
  "cd $my_dir/backend && yarn start" \
  "cd $my_dir/next && yarn start" \
  "cd $my_dir/next && yarn test"
