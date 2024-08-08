import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'C:/Users/JA/Documents/Visual_studio/Playwright_testy/tests', 
  projects: [
    {
      name: 'Chromium',
      use: {
        ...devices['Desktop Chromium'],
        deviceScaleFactor: undefined,
        headless: false,
        viewport: null,
      },
    },
    // Add more configurations for other browsers if needed
  ],
});
