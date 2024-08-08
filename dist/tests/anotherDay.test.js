"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elementgetnclick_1 = require("C:/Users/JA/Documents/Visual_studio/Playwright_testy/utilities/elementgetnclick");
const test_1 = require("@playwright/test");
const measuringloadtimes_1 = require("../utilities/measuringloadtimes");
const checkingifexist_1 = require("../utilities/checkingifexist");
const url = "https://ssc.siskom.waw.pl/";
(0, test_1.test)('Another day', async ({ page }) => {
    await page.goto(url);
    await (0, measuringloadtimes_1.loadTimes)(page);
    const engLanguageButton = await (0, checkingifexist_1.existsOrDefault)(page, 'area[shape="rect"][coords="360,135,400,159"][href="eng.html"]', 'English button');
    (0, test_1.expect)(engLanguageButton).toBeTruthy();
    await page.waitForSelector('area[shape="rect"][coords="360,135,400,159"][href="eng.html"]');
    await (0, elementgetnclick_1.click)(page, 'Clicked eng button', 'area[href="eng.html"]');
    await page.waitForTimeout(3000);
});
