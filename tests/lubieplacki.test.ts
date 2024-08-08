import { click } from 'C:/Users/JA/Documents/Visual_studio/Playwright_testy/utilities/elementgetnclick';
import { test } from '@playwright/test';
test('sprawdzanie.only', async ({ page })  => { 
await page.goto('https://chatgpt.com/');
})