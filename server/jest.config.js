const fetch = require("node-fetch");

global.fetch = fetch;

module.exports = {
  modulePathIgnorePatterns: ["<rootDir>/src/test-utils"],
  globalSetup: "./src/test-utils/globalSetup.js",
  globalTeardown: "./src/test-utils/globalTeardown.js"
};
