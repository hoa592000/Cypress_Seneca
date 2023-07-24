const { defineConfig } = require("cypress");

// async function setupNodeEvents(on, config){
//   await preprocessor.addCucumberPreprocessorPlugin(on, config);
      
//   on("file:preprocessor", browserify.default(config))
//   return config;
// }
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  viewportWidth: 1150,
  viewportHeight: 900,
  e2e: {
    async setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // on('file:preprocessor', cucumber())
      // implement node event listeners here
      // await preprocessor.addCucumberPreprocessorPlugin(on, config);
      
      // on("file:preprocessor", browserify.default(config));

    },
    // specPattern: "cypress/e2e/Base/*.feature",
    baseUrl: 'https://zeno.java.senecaesg.com/'
  },
});
