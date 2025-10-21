import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://app.qa.nesto.ca",
    specPattern: "cypress/e2e/**/*.cy.ts",
    defaultCommandTimeout: 8000,
    video: true,
    setupNodeEvents(on, config) { return config; },
  },
  env: { LANG: "en" },
});
