#!/usr/bin/env bash
set -e
my_dir="$(dirname "$0")"
cd $my_dir/backend
yarn install --frozen-lockfile
yarn dev --exit-after-generate-schema
yarn build
yarn start --exit-after-generate-schema
yarn build-sdk
