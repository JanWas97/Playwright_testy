import { test } from '@playwright/test';
import { click } from '../utilities/elementgetnclick';
test('Playing with element handles', async ({ page })  => { 
await page.goto('https://www.acciona.com/');
await click(page, 'Cookies cleared', '#CookieModal-AcceptAll-Button');
const importantHandle = await page.$('a[href="/solutions/transport/"]');
if (importantHandle) {
const handleText = await importantHandle.innerText();
console.log(`[${Date.now()}][Retreived text]: ${handleText}`);
} else {
throw new Error('Could not retreive element handle text');
}
await page.waitForTimeout(2000);
})