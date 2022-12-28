#!/usr/bin/env bash

releaseFlags=$1

cd ./runtime
echo "Building runtime..."
yarn install
yarn build
echo "Runtime built."
yarn test
echo "Runtime tests passed."
echo "Publishing runtime..."
semantic-release --debug --no-ci $releaseFlags
echo "Runtime published."
runtimeVersion=$(node -p -e "require('./package.json').version")
echo "runtimeVersion: $runtimeVersion"

cd ../cli
echo "Building cli..."
yarn install @gqlts/runtime@$runtimeVersion
yarn build
echo "Cli built."
yarn test
echo "Cli tests passed."
echo "Publishing cli..."
semantic-release --debug --no-ci $releaseFlags
echo "Cli published."
cliVersion=$(node -p -e "require('./package.json').version")
echo "cliVersion: $cliVersion"

echo "Updating repo..."
cd ../
# update package.json version to 2.0.0
npm version $runtimeVersion --no-git-tag-version --allow-same-version --no-commit-hooks
lerna version $runtimeVersion --no-git-tag-version --no-push --yes
yarn install
yarn buildall
yarn test
echo "Repo updated."
git add .
git commit -m "chore: update repo to $runtimeVersion [skip ci]"
git push
echo "Repo pushed."
