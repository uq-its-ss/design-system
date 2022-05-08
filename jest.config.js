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
    "@uqds/(.*)$": "<rootDir>/packages/$1",
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  setupFilesAfterEnv: [
    "<rootDir>/tests/jest/testing-library-jest-dom.js",
    "<rootDir>/tests/jest/jest-axe.js",
  ],
};
