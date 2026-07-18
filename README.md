# Playwright Fundamentals

This repository contains a Playwright fundamentals sample project for browser automation testing.

## Project structure

- `package.json` - project metadata and dependencies
- `playwright.config.ts` - Playwright configuration for running tests
- `tests/` - example Playwright tests for the default test directory
- `e2e/` - additional example end-to-end tests
- `.gitignore` - common files and folders excluded from Git

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run Playwright tests:

   ```bash
   npx playwright test
   ```

3. Open the Playwright HTML report after tests:

   ```bash
   npx playwright show-report
   ```

## Notes

- This repository is configured to use Playwright Test.
- The sample tests navigate to `https://playwright.dev/` and verify page behavior.
