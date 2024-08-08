import { click } from 'C:/Users/JA/Documents/Visual_studio/Playwright_testy/utilities/elementgetnclick';
import { customAlphabet } from 'nanoid';
import { test } from '@playwright/test';
test('Using NanoID with morele.net', async ({ page })  => { 
const poolOfRng = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 9);
const randomUsername = poolOfRng();      
await page.goto('https://www.morele.net/');
try {
await click(page, 'Cookies cleared', 'button[class="btn btn-primary w-100 btn--save-all"]');
await click(page, 'CLicked login', 'button:has-text("Zaloguj się Załóż konto")');
await page.fill('#username', randomUsername);
}catch{ console.log(`[${Date.now()}][Error]Typing with NanoID failed`);
throw new Error;
}finally{
console.log(`[${Date.now()}][Success]Typed with NanoID`);
}    
await page.waitForTimeout(2000);
})