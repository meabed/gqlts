import { promises as fs } from "fs";
import mkdirp from "mkdirp";
import { resolve } from "path";
import rimraf from "rimraf";

export const ensurePath = async (path: string[], clear: boolean = false) => {
  if (clear) {
    rimraf.sync(resolve(...path));
  }
  mkdirp.sync(resolve(...path));
};

export const requireModuleFromPath = (path: string[]) => require(resolve(...path));

export const readFileFromPath = (path: string[]) => fs.readFile(resolve(...path)).then((b) => b.toString());

export const writeFileToPath = (path: string[], content: string) => fs.writeFile(resolve(...path), content);

export const readFilesAndConcat = (files: string[]) =>
  Promise.all(files.map((file) => readFileFromPath([file]))).then((contents) => contents.join("\n"));
