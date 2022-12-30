import { Client, createClient } from '../sdk';
import { server } from '../src';
import { extractFiles } from '@gqlts/runtime/dist/extract-files/extract-files';
import supertest from 'supertest';

export async function sleep(milliseconds: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export const request = supertest(server);
// local graphql client
export const apiFlowGraphQLClient: Client = createClient({
  fetcherInstance: request,
  fetcherMethod: async (operation, config) => {
    const r = request.post('/graphql');
    const { clone, files } = extractFiles(operation);

    if (files.size > 0) {
      // 1. First document is graphql query with variables
      r.field('operations', JSON.stringify(clone));
      // 2. Second document maps files to variable locations
      const map: any = {};
      let i = 0;
      files.forEach((paths) => {
        map[i++] = paths;
      });
      r.field('map', JSON.stringify(map));
      // 3. all files not (same index as in map)
      let j = 0;
      for (const [file] of files) {
        r.attach(`${j++}`, file, { filename: file.name });
      }
    }

    const { headers = {} } = config || {};
    r.set('Content-Type', 'application/json').set('Accept', 'application/json');
    Object.entries(headers).forEach(([key, value]) => {
      if (key === 'authorization') return r.set(key, value.toString());

      r.set(key, value.toString());
    });
    if (files.size) {
      r.type('form');
    } else {
      r.send(JSON.stringify(operation));
    }
    return r
      .expect(200)
      .then((response) => {
        return response.body;
      })
      .catch((e) => {
        return { errors: [{ message: e.message, path: ['client'] }] };
      });
  },
});
