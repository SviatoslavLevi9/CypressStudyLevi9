import { defineConfig } from "cypress";



export default defineConfig({

  chromeWebSecurity: false,

  viewportHeight: 1080,

  viewportWidth: 1920,

  e2e: {

    setupNodeEvents(on, config) {

      // implement node event listeners here

    },

    baseUrl: 'https://dpg-ads-stage-nl.selfservice-advertising.dpgmedia.cloud/',

    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*']

  },

});