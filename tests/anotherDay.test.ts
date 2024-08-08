import { click } from 'C:/Users/JA/Documents/Visual_studio/Playwright_testy/utilities/elementgetnclick';
import { test, expect } from '@playwright/test';
import { loadTimes } from '../utilities/measuringloadtimes';
import {existsOrDefault} from '../utilities/checkingifexist';
const url = "https://ssc.siskom.waw.pl/"
test('Another day', async ({ page })  => { 
await page.goto(url);
await loadTimes(page);
const engLanguageButton = await existsOrDefault(page,'area[shape="rect"][coords="360,135,400,159"][href="eng.html"]','English button');
expect(engLanguageButton).toBeTruthy();
await page.waitForSelector('area[shape="rect"][coords="360,135,400,159"][href="eng.html"]');
await click(page, 'Clicked eng button', 'area[href="eng.html"]');
await page.waitForTimeout(3000);

})