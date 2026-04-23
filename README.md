# Playwright UI Automation

A UI automation testing project built with Playwright and TypeScript. Features include Page Object Model design pattern, reusable authentication via storageState, HTML reporting, and structured test organization for both authenticated and non-authenticated test scenarios.

## Project Structure

```
├── pages/              # Page Object Model files
├── tests/              # Test spec files
├── utils/              # Helper utilities
├── .env                # Environment variables (not committed)
└── playwright.config.ts
```

## Setup

```bash
# Install dependencies
npm install

# Install browsers
npx playwright install
```

Create a `.env` file in the root directory:

```
DEALLS_EMAIL=your_email
DEALLS_PASSWORD=your_password
```

## Running Tests

```bash
# Run all tests
npx playwright test

# Run by project
npx playwright test --project=logged-in
npx playwright test --project=logged-out

# Run specific test file
npx playwright test saveJob
npx playwright test loginDealls

# Open last HTML report
npx playwright show-report
```

## Tech Stack

- [Playwright](https://playwright.dev/)
- TypeScript
- Page Object Model (POM)
