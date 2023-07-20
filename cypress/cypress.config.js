const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
// const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

// async function setupNodeEvents(on, config){
//   await preprocessor.addCucumberPreprocessorPlugin(on, config);
      
//   on("file:preprocessor", browserify.default(config))
//   return config;
// }
module.exports = defineConfig({
  viewportWidth: 1150,
  viewportHeight: 900,
  e2e: {
    async setupNodeEvents(on, config) {
      
      // on('file:preprocessor', cucumber())
      // implement node event listeners here
      // await preprocessor.addCucumberPreprocessorPlugin(on, config);
      
      // on("file:preprocessor", browserify.default(config));

    },
    // specPattern: "cypress/e2e/Base/*.feature",
    baseUrl: 'https://zeno.java.senecaesg.com/'
  },
});
