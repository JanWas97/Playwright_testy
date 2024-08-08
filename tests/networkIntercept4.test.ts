import { test } from '@playwright/test';
test('modyfing JSON type POST requests', async ({ page })  => {
await page.route('**/*', async route => {
const request = route.request();
if (request.method() === 'POST' && request.headers()['content-type'] === 'application/json') {
const postData = request.postData();
if (postData) {
try {
const json = JSON.parse(postData);
json.newKey = 'MyValue';
json.newKey = 'MyOtherValue';
console.log(`[${Date.now()}][Success] JSON POST data modified.`);
await route.continue({
postData: JSON.stringify(json),
headers: {
...request.headers(),'Content-Type': 'application/json'
}
});
} catch (e) {
console.error(`[${Date.now()}]'Failed to parse or modify JSON:', e`);
await route.continue();
}
} else {
await route.continue();
console.log(`[${Date.now()}][Error] No POST data to modify.`);
}
} else {
await route.continue();
console.log(`[${Date.now()}][Error] JSON DATA not modified.`);
}
});
await page.goto('https://httpbin.org/post');
await page.waitForTimeout(3000);
})