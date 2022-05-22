module.exports = {
  testEnvironment: "jsdom",
  verbose: true,
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/app/core/",
    "<rootDir>/app/modules/contrib/",
    "<rootDir>/app/themes/contrib/",
    "<rootDir>/scripts",
  ],
  moduleNameMapper: {
    "^.+\\.css$": "identity-obj-proxy",
    "@uqds/test-utils": "<rootDir>/tests/jest/jest-dom.js",
    "@uqds/output/(.*)$": "<rootDir>/packages/storybook-html/src/components/$1",
    "@uqds/(.*)$": "<rootDir>/packages/$1"
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.html$": "<rootDir>/tests/jest/html-transform.js",
  },
  setupFilesAfterEnv: [
    "<rootDir>/tests/jest/testing-library-jest-dom.js",
    "<rootDir>/tests/jest/jest-axe.js",
    "<rootDir>/tests/jest/jest-dom.js",
  ],
};
