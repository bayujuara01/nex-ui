export default {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: ['./jsdom.mocks.ts', './jest.react.ts'],
  globalSetup: './jest.setup.ts',
  moduleNameMapper: {
    '@nex-ui/(.*)': '<rootDir>/packages/@nex-ui/$1/src',
    '@nex-ui-tests/(.*)': '<rootDir>/packages/@nex-ui-tests/$1/src',
    '\\.(css)$': 'identity-obj-proxy',
    '(\\.+/.+)\\.js$': '$1',
  },
};
