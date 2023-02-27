const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`);

  if(!fs.existsSync(pathToConfigFile)) {n
    console.log("No custom config file found.");
    return {};
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = {
  "projectId": "hm651q",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "specPattern": "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    "baseUrl": "http://www.webdriveruniversity.com",
    "chromeWebSecurity": false,
    "experimentalSessionAndOrigin": true,
    "screenshotOnRunFailure": true,
    "trashAssetsBeforeRuns": true,
    "video": true,
    "videoUploadOnPasses": true,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    },
    retries: {
   runMode: 0,
   openMode: 1
    },
    "env": {
      "webdriveruni_homepage": "http://www.webdriveruniversity.com",
      "first_name": "YYJ"
    }
  },
}
