import { generate } from '@gqlts/cli';
import { buildSchema } from 'graphql';
import { execSync } from 'node:child_process';
import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileExistsSync } from 'tsconfig-paths/lib/filesystem';

export async function buildSdk({ skipIfExists = false }: { skipIfExists?: boolean } = {}) {
  let schemaString = readFileSync(join(__dirname, '../src/schema.graphql')).toString();
  // remove first 4 lines
  schemaString = schemaString.split('\n').slice(4).join('\n');
  let schemaStringDist: string;
  try {
    schemaStringDist = readFileSync(join(__dirname, './dist/schema.graphql')).toString();
  } catch (e) {}

  if (skipIfExists && schemaString === schemaStringDist) {
    console.log('Skipping SDK build, as it already exists.');
    return;
  }
  // if no node_modules, run yarn
  if (!fileExistsSync(`${__dirname}./node_modules/ts-node`)) {
    console.log('No node_modules found, running yarn...');
    await execSync('yarn');
  }

  console.log('Building SDK...');

  const schema = buildSchema(schemaString);

  rmSync(join(__dirname, '/dist'), { force: true, recursive: true });
  rmSync(join(__dirname, '/src'), { force: true, recursive: true });

  await generate({
    schema: schemaString,
    output: join(__dirname, 'dist'),
    onlyCJSModules: true,
    standalone: 'demo-apps-backend-sdk',
    // verbose: true,
  });

  const indexContent = readFileSync(join(__dirname, './dist/index.js')).toString();
  const indexContentWithURL = indexContent.replace(
    'module.exports.createClient',
    `
var serviceUrlMap = {
  local: "http://localhost:4000",
  development: "https://dev-api.heroku.app"
}

module.exports.getServiceUrl = function(env) {
  return { apiUrl: serviceUrlMap[env], graphqlUrl: serviceUrlMap[env] + "/graphql", env };
}
module.exports.createClient`
  );

  writeFileSync(join(__dirname, './dist/index.js'), indexContentWithURL);

  const indexTSContent = readFileSync(join(__dirname, './dist/index.d.ts')).toString();
  const indexTSContentWithURL = indexTSContent.replace(
    'export interface Client',
    `
export type ServiceUrlMap = {
  [serviceName in "local" | "development" | "stage" | "production"]: string
}
export declare const getServiceUrl: (env?: string) => { apiUrl:string, graphqlUrl:string, env: string }
export interface Client`
  );

  writeFileSync(join(__dirname, './dist/index.d.ts'), indexTSContentWithURL);

  console.log('Build SDK Success...');
}

const args = process.argv.slice(2);

if (args.includes('--build')) {
  buildSdk()
    .then()
    .catch((e) => {
      console.error(`Build SDK failed: ${e}`);
    });
}
