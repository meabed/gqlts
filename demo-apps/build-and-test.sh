#!/usr/bin/env bash
set -e
my_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $my_dir/backend
yarn install --frozen-lockfile --check-files
yarn dev --exit-after-generate-schema
yarn build-sdk
yarn typecheck
yarn build
yarn start --exit-after-generate-schema
yarn test

# test the standalone bundle
echo "Testing standalone bundle"
cd $my_dir/html
yarn install --frozen-lockfile --check-files
npx --yes concurrently --kill-others --success first --names "backend,frontend" \
  "cd $my_dir/backend && yarn start" \
  "cd $my_dir/html && yarn test"

# test react nextjs app with sdk ( ssr / csr / api routes )
echo "Testing react nextjs app"
cd $my_dir/next
yarn install --frozen-lockfile --check-files
npx --yes concurrently --no-install --kill-others --success first --names "backend,frontend" \
  "cd $my_dir/backend && yarn start" \
  "cd $my_dir/next && yarn dev" \
  "cd $my_dir/next && yarn test"

# test with production build
echo "Testing production build"
cd $my_dir/next
yarn build
npx --yes concurrently --no-install --kill-others --success first --names "backend,frontend" \
  "cd $my_dir/backend && yarn start" \
  "cd $my_dir/next && yarn start" \
  "cd $my_dir/next && yarn test"


## testing other packages
# todo fix "example-usage" "try-clients" remote server hasura apps
allPkgs=( "integration-tests" )
for pkg in "${allPkgs[@]}"
do
  echo "-----------------------------------"
  echo "Building and Testing $pkg"
  cd $my_dir/$pkg
  yarn install --frozen-lockfile --ignore-scripts
  yarn build
  yarn gen
  yarn test
done
