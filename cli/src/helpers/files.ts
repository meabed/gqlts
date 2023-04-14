import { promises as fs } from 'fs';
import { mkdirpSync } from 'mkdirp';
import { resolve } from 'path';
import { rimrafSync } from 'rimraf';

export async function ensurePath(path: string[], clear: boolean = false) {
  if (clear) {
    rimrafSync(resolve(...path));
  }
  mkdirpSync(resolve(...path));
}

export const requireModuleFromPath = (path: string[]) => require(resolve(...path));

export const readFileFromPath = (path: string[]) => fs.readFile(resolve(...path)).then((b) => b.toString());

export const writeFileToPath = (path: string[], content: string) => fs.writeFile(resolve(...path), content);

export const readFilesAndConcat = (files: string[]) =>
  Promise.all(files.map((file) => readFileFromPath([file]))).then((contents) => contents.join('\n'));
