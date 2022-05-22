const fs = typeof window !== "undefined" ? null : eval('require("node:fs")');
const ReadStream = fs ? fs.ReadStream : null;

export class ReactNativeFile {
  uri: string;
  name?: string;
  type?: string;

  constructor(uri: string, name?: string, type?: string) {
    this.uri = uri;
    this.name = name;
    this.type = type;
  }
}

export function isExtractableFile(value) {
  return (
    (typeof File !== "undefined" && value instanceof File) ||
    (typeof Blob !== "undefined" && value instanceof Blob) ||
    (ReadStream && typeof ReadStream !== "undefined" && value instanceof ReadStream) ||
    value instanceof ReactNativeFile
  );
}

export function extractFiles(value, path = "", isExtractableFileMethod = isExtractableFile) {
  // Map of extracted files and their object paths within the input value.
  const files = new Map();

  // Map of arrays and objects recursive within the input value and their clones,
  // for reusing clones of values that are referenced multiple times within the
  // input value.
  const clones = new Map();

  /**
   * Recursively clones the value, extracting files.
   * @kind function
   * @name extractFiles~recurse
   * @param {*} value Value to extract files from.
   * @param {ObjectPath} path Prefix for object paths for extracted files.
   * @param {Set} recursive Recursive arrays and objects for avoiding infinite recursion of circular references within the input value.
   * @returns {*} Clone of the value with files replaced with `null`.
   * @ignore
   */
  function recurse(value, path, recursive) {
    let clone = value;

    if (isExtractableFileMethod(value)) {
      clone = null;

      const filePaths = files.get(value);

      filePaths ? filePaths.push(path) : files.set(value, [path]);
    } else {
      const isList = Array.isArray(value) || (typeof FileList !== "undefined" && value instanceof FileList);
      const isObject = value && value.constructor === Object;

      if (isList || isObject) {
        const hasClone = clones.has(value);

        if (hasClone) clone = clones.get(value);
        else {
          clone = isList ? [] : {};

          clones.set(value, clone);
        }

        if (!recursive.has(value)) {
          const pathPrefix = path ? `${path}.` : "";
          const recursiveDeeper = new Set(recursive).add(value);

          if (isList) {
            let index = 0;

            // @ts-ignore
            for (const item of value) {
              const itemClone = recurse(item, pathPrefix + index++, recursiveDeeper);

              if (!hasClone) clone.push(itemClone);
            }
          } else
            for (const key in value) {
              const propertyClone = recurse(value[key], pathPrefix + key, recursiveDeeper);

              if (!hasClone) clone[key] = propertyClone;
            }
        }
      }
    }

    return clone;
  }

  return {
    clone: recurse(value, path, new Set()),
    files,
  };
}
