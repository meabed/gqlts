import { mkdirSync, promises as fs, rmSync } from 'fs';
import { resolve } from 'path';

export async function ensurePath(path: string[], clear: boolean = false) {
  if (clear) {
    rmSync(resolve(...path), { force: true, recursive: true });
  }
  mkdirSync(resolve(...path), { recursive: true });
}

export const requireModuleFromPath = (path: string[]) => require(resolve(...path));

export const readFileFromPath = (path: string[]) => fs.readFile(resolve(...path)).then((b) => b.toString());

export const writeFileToPath = (path: string[], content: string) => fs.writeFile(resolve(...path), content);

export const readFilesAndConcat = (files: string[]) =>
  Promise.all(files.map((file) => readFileFromPath([file]))).then((contents) => contents.join('\n'));
