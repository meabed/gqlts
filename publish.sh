#!/usr/bin/env bash

set -e
my_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
oldVersion=$(node -p "require('./package.json').version")
pkgVersion=$(cat ./next-version.txt)
branch=$1

npm config set '//registry.npmjs.org/:_authToken' "$NPM_TOKEN"

echo "Old version: $oldVersion"
echo "Publishing version $pkgVersion - $branch"

echo "pkgVersion: $pkgVersion"
npm version $pkgVersion --no-git-tag-version --allow-same-version --no-commit-hooks --workspace-update=false
npx lerna version $pkgVersion --no-git-tag-version --no-push --yes
echo "Package version updated to $pkgVersion"
echo "-----------------------------------"
# replace old versions in files
find . -type f \( -name '*.js' -or -name '*.ts' -or -name '*.tsx' -or -name '*.json' -or -name 'README.md' \) -not -path '*node_modules*' -not -path '*.next*' -exec grep -l "$oldVersion" {} \; | xargs perl -pi -e "s/$oldVersion/$pkgVersion/g"

# test main packages cli and runtime
yarn install --frozen-lockfile --ignore-scripts
yarn buildall
yarn test

#
# yarn examplecli
## todo fix this by hoisting the repo https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind

## testing other packages
allPkgs=( "example-usage" "integration-tests" "try-clients" )
for pkg in "${allPkgs[@]}"
do
  echo "-----------------------------------"
  echo "Building and Testing $pkg"
  cd $my_dir/demo-apps/$pkg
  yarn install --frozen-lockfile --ignore-scripts
  yarn build
  yarn gen
  yarn test
done

cd $my_dir
echo "Updating repo..."
command cp -rf CHANGELOG.md LICENSE README.md $my_dir/runtime/
command cp -rf CHANGELOG.md LICENSE README.md $my_dir/cli/
git add .
git commit -m "chore(release): update packages to $pkgVersion [skip ci]"
if [[ $branch == "master" ]]; then
  git pull origin $branch --ff-only
  git push
  echo "Repo pushed."
fi

cd $my_dir/runtime
runtimeVersion=$(node -p -e "require('./package.json').version")
echo "runtimeVersion: $runtimeVersion"
npm publish --access public

cd $my_dir/cli
cliVersion=$(node -p -e "require('./package.json').version")
echo "cliVersion: $cliVersion"
npm publish --access public

echo "Done."
