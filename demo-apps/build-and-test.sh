#!/usr/bin/env bash
set -e
my_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
repo_dir="$( cd "$my_dir/.." && pwd )"

cd "$repo_dir"
bun ci

cd $my_dir/backend
bun run dev --exit-after-generate-schema
bun run build-sdk
bun run typecheck
bun run build
bun run start --exit-after-generate-schema
bun run test

# test the standalone bundle
echo "Testing standalone bundle"
cd $my_dir/html
bunx concurrently --kill-others --success first --names "backend,frontend" \
  "cd $my_dir/backend && bun run start" \
  "cd $my_dir/html && bun run test"

# test react nextjs app with sdk ( ssr / csr / api routes )
echo "Testing react nextjs app"
cd $my_dir/next
bunx concurrently --kill-others --success first --names "backend,frontend" \
  "cd $my_dir/backend && bun run start" \
  "cd $my_dir/next && bun run dev" \
  "cd $my_dir/next && bun run test"

# test with production build
echo "Testing production build"
cd $my_dir/next
bun run build
bunx concurrently --kill-others --success first --names "backend,frontend" \
  "cd $my_dir/backend && bun run start" \
  "cd $my_dir/next && bun run start" \
  "cd $my_dir/next && bun run test"


## testing other packages
# todo fix "example-usage" "try-clients" remote server hasura apps
allPkgs=( "integration-tests" )
for pkg in "${allPkgs[@]}"
do
  echo "-----------------------------------"
  echo "Building and Testing $pkg"
  cd $my_dir/$pkg
  bun run build
  bun run gen
  bun run test
done
