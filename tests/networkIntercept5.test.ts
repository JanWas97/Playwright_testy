import { test } from '@playwright/test';
test('modifying URL-encoded type POST requests', async ({ page }) => {
await page.route('**/*', async route => {
const request = route.request();
if (request.method() === 'POST' && request.headers()['content-type'] === 'application/x-www-form-urlencoded') {
const postData = request.postData();
if (postData) {
const urlSearchParams = new URLSearchParams(postData);
urlSearchParams.set('newKey', 'newValue');
console.log(`[${Date.now()}][Modified POST Data]:`, urlSearchParams.toString());
await route.continue({
postData: urlSearchParams.toString(),
headers: {
...request.headers(),
'Content-Type': 'application/x-www-form-urlencoded'
}
});
} else {
console.log(`[${Date.now()}][Error] No POST data to modify.`);
await route.continue();
}
} else {
await route.continue();
console.log(`[${Date.now()}][Error] URL-encoded data not modified.`);
}
});
await page.goto('https://www.youtube.com/');
await page.waitForTimeout(2000);
});
