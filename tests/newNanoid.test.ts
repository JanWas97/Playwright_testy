import { click } from 'C:/Users/JA/Documents/Visual_studio/Playwright_testy/utilities/elementgetnclick';
import { customAlphabet } from 'nanoid';
import { test } from '@playwright/test';
import { locate } from 'C:/Users/JA/Documents/Visual_studio/Playwright_testy/utilities/locatingelement';
import { loadTimes } from 'C:/Users/JA/Documents/Visual_studio/Playwright_testy/utilities/measuringloadtimes';

const poolOfRng = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 10);    
const randomUsername = poolOfRng();

test('New Nanoid', async ({ page })  => { 
    await page.goto('https://www.efortuna.pl/');
    await loadTimes(page);
    await page.waitForSelector('#cookie-consent-button-accept');
    await click(page, 'Accepted cookies', '#cookie-consent-button-accept');
    await click(page, 'Clicked login button', '#login-mounted');

    try {    
        let result = riskyOperation();
        await page.waitForSelector("input.form-login__input.f-text-base.fortuna-input__input");
        await page.type("input.form-login__input.f-text-base.fortuna-input__input", randomUsername);
        console.log('Operation succeeded:', result);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Operation failed:', error.message);
        } else {
            console.error('Operation failed:', error);
        }
    }

    function riskyOperation() {
        if (Math.random() > 0.5) {
            throw new Error('Crashed while trying to type with Nanoid');
        }
        return 'Successfully typed with Nanoid';
    }

    await locate(page, 'div:has-text("ZAPOMNIAŁEŚ HASŁA?")', 'Checked if forgot password button exist');
    await page.waitForTimeout(3000);
});
