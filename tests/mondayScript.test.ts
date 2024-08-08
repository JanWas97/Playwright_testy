import { test, expect } from '@playwright/test';
import { click } from '../utilities/elementgetnclick';
import { existsOrDefault } from '../utilities/checkingifexist';
test('I dont know what it does', async ({ page })  => { 
await page.goto('https://developer.chrome.com/');
await page.hover('a[href="https://developer.chrome.com/docs"]');
await click(page,'Clicked button from drop down menu', 'a[href="https://developer.chrome.com/docs/chromium"]');
const checkingDesiredElement = await existsOrDefault(page,'//*[@id="gc-wrapper"]/main/devsite-content/article/div[2]/section[1]/div/div/div/div[1]/figure/picture/img', 'Desired element');
expect(checkingDesiredElement).toBeTruthy();
await page.waitForTimeout(2000);
})