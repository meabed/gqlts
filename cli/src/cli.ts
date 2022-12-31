#!/usr/bin/env node
import { Config } from './config';
import { parseColonSeparatedStrings } from './helpers/parse';
import { generate } from './main';
import { validateConfigs } from './tasks/validateConfigs';
import { version } from './version';
import colors from 'colors';
import { existsSync, readFileSync } from 'fs';
import yargs from 'yargs';

const program = yargs(process.argv.slice(2))
  .option('output', {
    alias: 'o',
    description: 'Output directory',
    demandOption: true,
    type: 'string',
  })
  .option('endpoint', {
    alias: 'e',
    description: 'Graphql endpoint',
    type: 'string',
  })
  .option('get', {
    alias: 'g',
    description: 'use GET for introspection query',
    type: 'boolean',
  })
  .option('schema', {
    alias: 's',
    type: 'string',
    description: 'path to GraphQL schema definition file',
  })
  // .array('header', )
  .option('header', {
    alias: 'H',
    type: 'array',
    string: true,
    description: 'header to use in introspection query',
  })
  .option('scalar', {
    alias: 'S',
    type: 'array',
    string: true,
    description: 'map a scalar to a type, for example `-S DateTime:string` ',
  })
  .option('methodPrefix', {
    alias: 'mp',
    type: 'string',
    default: '',
    string: true,
    description: 'prefix for generated methods',
  })
  .option('methodSuffix', {
    alias: 'ms',
    type: 'string',
    default: '',
    string: true,
    description: 'suffix for generated methods',
  })
  .option('esm', {
    type: 'boolean',
    default: false,
    description: 'generate only ES modules code, ./generated/index.js will use esm exports and imports',
  })
  .option('standalone-name', {
    type: 'string',
    default: '',
    description: 'generate only standalone bundle code, ./generated/standalone.js',
  })
  .option('standalone-compress', {
    type: 'boolean',
    default: true,
    description: 'compress standalone bundle code, ./generated/standalone.js',
  })
  .option('esm-and-cjs', {
    type: 'boolean',
    default: false,
    description:
      'generate both ES modules code and CJS code, useful when publishing a package, ./generated/index.js will use CJS require',
  })
  .option('sort', {
    type: 'boolean',
    default: false,
    description: 'sort object properties to not create diffs after generations',
  })
  .option('verbose', { alias: 'v', type: 'boolean', default: false })
  .example(
    '$0 --output ./generated --endpoint http://localhost:3000  -H "Authorization: Bearer xxx"',
    'generate the client from an endpoint'
  )
  .example('$0 --output ./generated --schema ./schema.graphql', 'generate the client from a schema')
  .help('help')
  .help('h')
  .parseSync();

// .option('-o, --output <./myClient>', 'output directory')
// .option('-e, --endpoint <http://example.com/graphql>', 'GraphQL endpoint')
// .option('-g, --get', 'use GET for introspection query')
// .option(
//     '-s, --schema <./mySchema.graphql>',
//     'path to GraphQL schema definition file',
// )
// .option(
//     '-f, --fetcher <./schemaFetcher.js>',
//     'path to introspection query fetcher file',
// )
// .option('-H', '--header')
// .option('-v, --verbose', 'verbose output')
// .parse(process.argv)

const config: Config = {
  endpoint: program.endpoint,
  useGet: program.get,
  schema: program.schema && readFile(program.schema),
  output: program.output,
  methodPrefix: program.methodPrefix ?? '',
  methodSuffix: program.methodSuffix ?? '',
  headers: parseColonSeparatedStrings(program.header || []),
  scalarTypes: parseColonSeparatedStrings(program.scalar || []),
  onlyEsModules: program.esm,
  onlyCJSModules: !program['esm-and-cjs'] && !program.esm,
  'standalone-name': program['standalone-name'],
  'standalone-compress': program['standalone-compress'],
  verbose: program.verbose,
  sortProperties: program.sort,
};

if (!validateConfigs([config])) {
  process.exit(1);
}

generate(config)
  .catch((e: any) => {
    console.error(colors.red('Cannot generate, got an error:'));
    console.error(e);
    process.exit(1);
  })
  .then(() => {
    printHelp({
      dirPath: program.output,
      useYarn: false,
      dependencies: [`@gqlts/runtime@${version}`, 'graphql'],
    });
  });

export function printHelp({ useYarn, dirPath, dependencies }) {
  console.info();
  console.info(`${colors.green('Success!')} Generated client code inside '${dirPath}'`);
  console.info();
  console.info(colors.bold('Remember to install the necessary runtime package with:'));
  console.info();
  console.info(`  ${colors.cyan(`${useYarn ? 'yarn add' : 'npm install'} ${dependencies.join(' ')}`)}`);
  console.info();
  console.info('PS: `@gqlts/runtime` should always have the same version as the cli!');
  console.info();
}

function readFile(p) {
  if (!existsSync(p)) {
    console.log(`file '${p}' does not exist`);
    process.exit(1);
  }
  return readFileSync(p).toString();
}
