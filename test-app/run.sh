#!/usr/bin/env bash
set -e
cd test-app/backend
yarn install --frozen-lockfile
yarn dev --exit-after-generate-schema
yarn build
yarn build-sdk
