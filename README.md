# nesto — Cypress E2E test suite

Cypress-based E2E test suite for the signup flow used at `https://app.qa.nesto.ca/signup`.

## What’s in this repo
- cypress.config.ts — Cypress configuration (baseUrl, specPattern, env defaults).
- cypress/e2e — test specs (.cy.ts).
- cypress/pages — Page Object classes (e.g. `SignupPage.ts`).
- cypress/support — custom Cypress commands and global test setup.
- cypress/fixtures — test data / i18n fixtures.

## Run tests

npx cypress open

npx cypress run

Set LANG env for tests (overrides default `env: { LANG: "en" }` in cypress.config.ts):

npx cypress run --env LANG=fr
# or for open
npx cypress open --env LANG=fr

## Notes
- Base URL is `https://app.qa.nesto.ca` (set in cypress.config.ts).
- Default language is controlled by `Cypress.env('LANG')` (default `en`) and can be overridden in the run command.
