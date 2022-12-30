#!/usr/bin/env bash

set -e

pkgVersion=$(cat ./next-version.txt)
branch=$1

npm config set '//registry.npmjs.org/:_authToken' "$NPM_TOKEN"

echo "Publishing version $pkgVersion - $branch"

echo "pkgVersion: $pkgVersion"
npm version $pkgVersion --no-git-tag-version --allow-same-version --no-commit-hooks --workspace-update=false
npx lerna version $pkgVersion --no-git-tag-version --no-push --yes

yarn install --frozen-lockfile || true
yarn install --frozen-lockfile
yarn buildall
yarn test

echo "Updating repo..."
command cp -rf CHANGELOG.md LICENSE README.md ./runtime/
command cp -rf CHANGELOG.md LICENSE README.md ./cli/
git add .
git commit -m "chore(release): update packages to $pkgVersion [skip ci]"
if [[ $branch == "master" ]]; then
  git pull origin $branch --ff-only
  git push
  echo "Repo pushed."
fi

cd ./runtime
runtimeVersion=$(node -p -e "require('./package.json').version")
echo "runtimeVersion: $runtimeVersion"
npm publish --access public

cd ../cli
cliVersion=$(node -p -e "require('./package.json').version")
echo "cliVersion: $cliVersion"
npm publish --access public

echo "Done."
