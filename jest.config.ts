import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^.+\\.s?css$': '<rootDir>/src/__mocks__/assetMock.ts',
  },
  collectCoverage: true,
  coverageReporters: ['text'],
};

export default config;
