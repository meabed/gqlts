#!/usr/bin/env bash

set -e

pkgVersion=$1
branch=$2
commitLength=$3
date=$4

echo "Publishing version $pkgVersion - $branch - $commitLength - $date"

echo "pkgVersion: $pkgVersion"
npm version $pkgVersion --no-git-tag-version --allow-same-version --no-commit-hooks --workspace-update=false
lerna version $pkgVersion --no-git-tag-version --no-push --yes

yarn install --frozen-lockfile
yarn buildall
yarn test

echo "Updating repo..."
git add .
git commit -m "chore(release): update packages to $pkgVersion [skip ci]"
echo "Repo pushed."

cd ./runtime
runtimeVersion=$(node -p -e "require('./package.json').version")
echo "runtimeVersion: $runtimeVersion"
npm publish --access public

cd ../cli
cliVersion=$(node -p -e "require('./package.json').version")
echo "cliVersion: $cliVersion"
npm publish --access public

echo "Done."
