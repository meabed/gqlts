import path from 'node:path';
import { fileURLToPath } from 'node:url';
import nextra from 'nextra';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const withNextra = nextra({});

export default withNextra({
  output: 'export',
  turbopack: {
    root: projectRoot,
  },
});
