import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  testIgnore: process.env.CI ? ['**/searchYoutube.spec.ts', '**/saveJob.spec.ts'] : [],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'always' }]],
  use: {
    trace: 'on-first-retry',
    screenshot: 'on',
    video: 'on-first-retry',
  },
  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        headless: true
      },
    },
    {
      name: 'logged-out',
      testMatch: ['**/loginDealls.spec.ts', '**/searchYoutube.spec.ts'],
      use: {
        ...devices['Desktop Chrome'],
        headless: !!process.env.CI,
      },
    },
    {
      name: 'logged-in',
      testIgnore: ['**/loginDealls.spec.ts', '**/searchYoutube.spec.ts'],
      use: {
        ...devices['Desktop Chrome'],
        headless: !!process.env.CI,
        storageState: 'test-results/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
});
