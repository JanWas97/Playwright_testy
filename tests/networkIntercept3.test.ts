import { test } from '@playwright/test';
test('intercepting POST requests', async ({ page })  => {
await page.route('**/*', route => {
const request = route.request();
if (request.method() === 'POST') {
console.log(`[${Date.now()}][POST-data intercepted]:`, request.postData());
}
route.continue();
});
await page.goto('https://www.youtube.com/');
await page.waitForTimeout(3000);
})