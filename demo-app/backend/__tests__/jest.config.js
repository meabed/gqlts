module.exports = {
  preset: 'ts-jest',
  testTimeout: 30000,
  testRegex: '.*.test.ts$',
  testPathIgnorePatterns: ['<rootDir>/__tests__/__mocks__/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx'],
  testEnvironment: 'node',
  collectCoverage: false,
  coverageReporters: ['json', 'html'],
  modulePathIgnorePatterns: ['<rootDir>/prod_node_modules'],
  globalTeardown: '<rootDir>/globalTeardown.ts',
  globalSetup: '<rootDir>/globalSetup.ts',
};
