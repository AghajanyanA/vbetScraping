import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './.',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 5,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },
  timeout: 200000,

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
