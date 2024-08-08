"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elementgetnclick_1 = require("C:/Users/JA/Documents/Visual_studio/Playwright_testy/utilities/elementgetnclick");
const nanoid_1 = require("nanoid");
const test_1 = require("@playwright/test");
const locatingelement_1 = require("C:/Users/JA/Documents/Visual_studio/Playwright_testy/utilities/locatingelement");
const measuringloadtimes_1 = require("C:/Users/JA/Documents/Visual_studio/Playwright_testy/utilities/measuringloadtimes");
const poolOfRng = (0, nanoid_1.customAlphabet)('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 10);
const randomUsername = poolOfRng();
(0, test_1.test)('New Nanoid', async ({ page }) => {
    await page.goto('https://www.efortuna.pl/');
    await (0, measuringloadtimes_1.loadTimes)(page);
    await page.waitForSelector('#cookie-consent-button-accept');
    await (0, elementgetnclick_1.click)(page, 'Accepted cookies', '#cookie-consent-button-accept');
    await (0, elementgetnclick_1.click)(page, 'Clicked login button', '#login-mounted');
    try {
        let result = riskyOperation();
        await page.waitForSelector("input.form-login__input.f-text-base.fortuna-input__input");
        await page.type("input.form-login__input.f-text-base.fortuna-input__input", randomUsername);
        console.log('Operation succeeded:', result);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Operation failed:', error.message);
        }
        else {
            console.error('Operation failed:', error);
        }
    }
    function riskyOperation() {
        if (Math.random() > 0.5) {
            throw new Error('Crashed while trying to type with Nanoid');
        }
        return 'Successfully typed with Nanoid';
    }
    await (0, locatingelement_1.locate)(page, 'div:has-text("ZAPOMNIAŁEŚ HASŁA?")', 'Checked if forgot password button exist');
    await page.waitForTimeout(3000);
});
