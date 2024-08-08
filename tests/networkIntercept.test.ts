import { test } from '@playwright/test';
test('blocking requests', async ({ page })  => {
await page.route('**/*', route => {
if (route.request().url().includes('open.mp3')) {
route.abort();
console.log(`[${Date.now()}][Success]Requests aborted.`);
} else {
route.continue();
console.log(`[${Date.now()}][Also success]Nothing aborted because no requests match given string.`);
}
}); 
await page.goto('https://www.youtube.com/');
await page.waitForTimeout(3000);
})