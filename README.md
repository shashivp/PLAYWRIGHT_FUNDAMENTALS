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

## Test Files

- `tests/01_basic_tc.spec.ts` - Basic test case that navigates to IDrive and verifies the page title
- `tests/02_practice.spec.ts` - Practice test that verifies IDrive Cloud Backup page title and content
- `e2e/example.spec.ts` - Example end-to-end test

## Notes

- This repository is configured to use Playwright Test.
- Tests verify page navigation and title validation against real-world applications.
- The sample tests are designed for learning and practicing Playwright fundamentals.
