# Playwright_QA_Automation Cucumber

**Playwright TypeScript Framework with Cucumber & POM**

A test automation framework built using Playwright, TypeScript, Cucumber (BDD), and the Page Object Model (POM) design pattern.
This setup enables clean separation of test logic, reusable page objects, and readable Gherkin scenarios.

**Features:**

- Playwright for fast, reliable browser automation

- TypeScript for type-safety and maintainability

- Cucumber (BDD) for human-readable test scenarios

- Page Object Model (POM) for clean structure and reusability

- Supports Chromium

- Automatic HTML reports

- Easy CI/CD integration

## Project Structure
```
├── fixtures
│   └── urls.ts
│
├── reports
│   ├── html-report
│   └── json-report
│
├── tests
│   ├── features
│   │   └── *.feature
│   │
│   ├── locators
│   │   └── *.ts
│   │
│   ├── page-objects
│   │   └── *.ts
│   │
│   ├── steps
│   │   └── *.steps.ts
│   │
│   └── support
│       ├── hooks.ts
│       └── world.ts
│
├── cucumber.js
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

**Folders Purpose:**

- fixtures: Stores reusable data/config, e.g., base URLs
- reports: Output for HTML & JSON Cucumber reports
- features: Gherkin .feature files
- locators: Centralized selectors used by POM classes
- pages: Page Object Model classes
- steps: Step definitions mapped to Gherkin steps
- hooks.ts:	Before/After hooks, cleanup
- world.ts:	Custom world for sharing context between steps
- cucumber.js: Main Cucumber configuration
- playwright.config.ts: Playwright global settings

**Installation**

Install dependencies
npm install

Install Playwright browsers
npx playwright install

**Running Tests**

Run all tests - npm test OR npx cucumber-js

**Reports**

All reports are stored under reports/:

- HTML report: reports/html-report
- JSON report: reports/json-report


