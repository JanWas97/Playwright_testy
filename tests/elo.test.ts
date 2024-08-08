import { click } from 'C:/Users/JA/Documents/Visual_studio/Playwright_testy/utilities/elementgetnclick';
import { test } from '@playwright/test';
test('nowa konfiguracja', async ({ page })  => { 
await page.goto('https://www.morele.net/');
await click(page, 'dismissed cookies', '#cookie-consent > dialog > div > div > div.actions > button.btn.btn-primary.w-100.btn--save-all');
await page.waitForTimeout(3000);
})




