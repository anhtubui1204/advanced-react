module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
      'src/**/*.{js,jsx}',
      '!src/**/*.test.{js,jsx}',
      '!src/**/*.{css,scss,sass}',
      '!src/**/index.{js,jsx}',
    ],
    coverageThreshold: {
      global: {
        statements: 98,
        branches: 91,
        functions: 98,
        lines: 98,
      },
    },
    setupFilesAfterEnv: ['<rootDir>/internals/testing/setupTests.js'],
    testMatch: [
      '<rootDir>/src/**/__tests__/*.{js,jsx}',
      '<rootDir>/src/**/*.{spec,test}.{js,jsx}',
    ],
    testEnvironment: 'jsdom',
    transformIgnorePatterns: [
      '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
      '^.+\\.module\\.(css|sass|scss)$',
    ],
    moduleNameMapper: {
      '.*\\.(css|less|styl|scss|sass)$':
        '<rootDir>/internals/testing/cssModule.js',
      '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/internals/testing/image.js',
      '.*\\.svg': '<rootDir>/internals/testing/svgrMock.js',
    },
    moduleFileExtensions: ['web.js', 'js', 'json', 'web.jsx', 'jsx', 'node'],
    moduleDirectories: ['node_modules', 'src'],
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname',
    ],
    resetMocks: true,
  };
  