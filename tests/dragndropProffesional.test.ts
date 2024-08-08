import { click } from 'C:/Users/JA/Documents/Visual_studio/Playwright_testy/utilities/elementgetnclick';
import { test } from '@playwright/test';
import {draggin} from '../utilities/dragndropusable';
import {checkingDragnDrop} from '../utilities/draggingCheck';
test('Drag and drop end to end', async ({ page }) => { 
await page.goto('https://www.w3schools.com/html/html5_draganddrop.asp');
await click(page, "Cleared cookies", '#accept-choices');
await draggin(page, '#drag1','#div2');
await checkingDragnDrop(page, '#drag1', '#div2');
await page.waitForTimeout(2000);
await draggin(page, '#drag1', '#div1');
await checkingDragnDrop(page, '#drag1', '#div1');
await page.waitForTimeout(2000);
})

