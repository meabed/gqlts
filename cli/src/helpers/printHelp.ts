import colors from 'colors';

export type PrintHelpOptions = {
  dependencies: string[];
  dirPath: string;
};

export function packageManagerInstallCommands(dependencies: string[]) {
  const packages = dependencies.join(' ');
  return [`npm install ${packages}`, `pnpm add ${packages}`, `yarn add ${packages}`, `bun add ${packages}`];
}

export function printHelp({ dirPath, dependencies }: PrintHelpOptions) {
  console.info();
  console.info(`${colors.green('Success!')} Generated client code inside '${dirPath}'`);
  console.info();
  console.info(colors.bold('Remember to install the necessary runtime packages with your package manager:'));
  console.info();
  packageManagerInstallCommands(dependencies).forEach((command) => console.info(`  ${colors.cyan(command)}`));
  console.info();
  console.info('PS: `@gqlts/runtime` should always have the same version as the cli!');
  console.info();
}
