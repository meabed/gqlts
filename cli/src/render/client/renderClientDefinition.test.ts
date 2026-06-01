import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { toClientSchema } from '../../testHelpers/render';
import { RenderContext } from '../common/RenderContext';
import { renderClientDefinition } from './renderClientDefinition';

test('renders portable generated client public types', async () => {
  const schema = await toClientSchema(/* GraphQL */ `
    type Query {
      user: User
    }

    type User {
      id: ID!
      name: String
    }
  `);

  const ctx = new RenderContext(schema);
  renderClientDefinition(schema, ctx);

  const code = await ctx.toCode('typescript', true);

  expect(code).toContain('ClientRequestConfig as RuntimeClientRequestConfig');
  expect(code).toContain('extends RuntimeClientRequestConfig<D>');
  expect(code).toContain('export interface ClientOptions extends RuntimeClientOptions');
  expect(code).toContain('export interface AxiosInstance extends RuntimeAxiosInstance');
  expect(code).toContain('export interface WSClient extends RuntimeWSClient');
  expect(code).toContain('export declare const createClient: (options?: ClientOptions) => Client');
  expect(code).toContain('export interface Client<FI = AxiosInstance, RC = ClientRequestConfig>');
});

test('exported inferred clients are portable when runtime is nested under the generated sdk', async () => {
  const schema = await toClientSchema(/* GraphQL */ `
    type Query {
      user: User
    }

    type User {
      id: ID!
      name: String
    }
  `);

  const ctx = new RenderContext(schema);
  renderClientDefinition(schema, ctx);

  const tempDir = mkdtempSync(join(tmpdir(), 'gqlts-portable-client-'));
  try {
    const sdkDir = join(tempDir, 'node_modules/@example/sdk');
    mkdirSync(join(sdkDir, 'node_modules/@gqlts/runtime'), { recursive: true });
    mkdirSync(join(sdkDir, 'node_modules/axios'), { recursive: true });
    mkdirSync(join(sdkDir, 'node_modules/graphql-ws'), { recursive: true });
    mkdirSync(join(tempDir, 'src/sdks'), { recursive: true });

    writeFileSync(
      join(sdkDir, 'package.json'),
      JSON.stringify({
        name: '@example/sdk',
        version: '1.0.0',
        main: './index.js',
        types: './index.d.ts',
        exports: {
          '.': {
            types: './index.d.ts',
            default: './index.js',
          },
        },
      }),
    );
    writeFileSync(join(sdkDir, 'index.js'), 'exports.createClient = function createClient() { return {}; };\n');
    writeFileSync(join(sdkDir, 'index.d.ts'), await ctx.toCode('typescript', true));
    writeFileSync(
      join(sdkDir, 'schema.d.ts'),
      `
        export interface Query {
          user?: User | null
        }
        export interface User {
          id: string
          name?: string | null
        }
        export interface QueryRequest {
          user?: boolean | UserRequest
        }
        export interface UserRequest {
          id?: boolean
          name?: boolean
        }
      `,
    );
    writeFileSync(
      join(sdkDir, 'node_modules/@gqlts/runtime/index.d.ts'),
      `
        export type FieldsSelection<SRC, DST> = SRC
        export interface GraphqlOperation {
          query: string
          variables?: Record<string, unknown>
        }
        export interface ClientRequestConfig<D = any> {
          data?: D
          headers?: Record<string, string>
        }
        export interface ClientOptions {
          url?: string
          headers?: Record<string, string>
        }
        export class Observable<T> {}
      `,
    );
    writeFileSync(join(sdkDir, 'node_modules/axios/index.d.ts'), 'export interface AxiosInstance {}\n');
    writeFileSync(join(sdkDir, 'node_modules/graphql-ws/index.d.ts'), 'export interface Client {}\n');
    writeFileSync(
      join(tempDir, 'src/sdks/module-user.ts'),
      `
        import { createClient } from '@example/sdk'

        export const moduleUser = createClient({
          url: 'http://localhost/graphql',
        })
      `,
    );
    writeFileSync(
      join(tempDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          declaration: true,
          emitDeclarationOnly: true,
          module: 'Node16',
          moduleResolution: 'node16',
          outDir: './dist',
          rootDir: '.',
          skipLibCheck: true,
          strict: true,
          target: 'ES2020',
        },
        include: ['src/**/*.ts'],
      }),
    );

    execFileSync(join(__dirname, '../../../../node_modules/.bin/tsgo'), ['-p', join(tempDir, 'tsconfig.json')], {
      stdio: 'pipe',
    });

    const emitted = readFileSync(join(tempDir, 'dist/src/sdks/module-user.d.ts')).toString();
    expect(emitted).not.toContain('node_modules/@gqlts/runtime');
    expect(emitted).not.toContain('node_modules/axios');
  } finally {
    rmSync(tempDir, { force: true, recursive: true });
  }
});
