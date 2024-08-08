import { click } from 'C:/Users/JA/Documents/Visual_studio/Playwright_testy/utilities/elementgetnclick';
import { test, expect } from '@playwright/test';
import { existsOrDefault } from '../utilities/checkingifexist';
import { locate } from '../utilities/locatingelement';
test('End to end', async ({ page })  => { 
await page.goto('https://horizon.fandom.com/wiki/Horizon_Wiki');
await click(page, 'Cleared cookies', '//div[@class="NN0_TB_DIsNmMHgJWgT7U XHcr6qf5Sub2F2zBJ53S_"]');
const checkingGalleryItem = await existsOrDefault(page,'div[id="Horizon_Forbidden_West-_Burning_Shores"]', 'Gallery item');
expect(checkingGalleryItem).toBeTruthy();
await locate(page, 'div[id="Horizon_Forbidden_West-_Burning_Shores"]', 'Gallery item')
await page.waitForTimeout(2000);
})