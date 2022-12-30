import path from 'path';

export function relativeImportPath(from: string, to: string) {
  const fromResolved = path.relative(from, to);
  return fromResolved[0] === '.' ? fromResolved : `./${fromResolved}`;
}
