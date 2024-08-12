import { click } from 'C:/Users/JA/Documents/Visual_studio/Playwright_testy/utilities/elementgetnclick';
import { test } from '@playwright/test';
test('Website testing', async ({ page })  => { 
await page.goto('https://arstechnica.com/');
await click(page, 'Cleared cookies', '#onetrust-accept-btn-handler');
await page.waitForTimeout(2000);
})