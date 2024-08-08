import { test } from '@playwright/test';
test('modyfing header requests', async ({ page })  => {
await page.route('**/*', route => {
const request = route.request();
const customHeaders = {
...request.headers(),
'user-agent': 'MyCoolBrowser',
'sec-ch-ua-platform': 'MyOperatingSystem',
'sec-ch-ua': '"Bees";v="69"',
};
console.log(`[${Date.now()}][Modified Headers]:`, customHeaders);
route.continue({ headers: customHeaders });
});
await page.goto('https://httpbin.org/headers');
await page.waitForTimeout(3000);
})