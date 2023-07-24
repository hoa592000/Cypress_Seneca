// const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
// async function setupNodeEvents(on, config){
//   await preprocessor.addCucumberPreprocessorPlugin(on, config);
      
//   on("file:preprocessor", browserify.default(config))
//   return config;
// }
module.exports = defineConfig({
  viewportWidth: 1150,
  viewportHeight: 900,
  reporter: 'cypress-mochawesome-reporter', // for html reporter
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure = true;
      // require('cypress-mochawesome-reporter/plugin')(on); // for html reporter
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });

    },
    // specPattern: "cypress/e2e/Base/*.feature",
    baseUrl: 'https://zeno.java.senecaesg.com/'
  },
});
