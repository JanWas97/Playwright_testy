"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elementgetnclick_1 = require("C:/Users/JA/Documents/Visual_studio/Playwright_testy/utilities/elementgetnclick");
const test_1 = require("@playwright/test");
(0, test_1.test)('nowa konfiguracja', async ({ page }) => {
    await page.goto('https://www.morele.net/');
    await (0, elementgetnclick_1.click)(page, 'dismissed cookies', '#cookie-consent > dialog > div > div > div.actions > button.btn.btn-primary.w-100.btn--save-all');
    await page.waitForTimeout(3000);
});
