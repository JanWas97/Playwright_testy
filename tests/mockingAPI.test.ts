import { test, expect } from '@playwright/test';
test('Mock API response', async ({ page })  => {
await page.route('https://jsonplaceholder.typicode.com/posts/*', async route => {
await new Promise(resolve => setTimeout(resolve, 5000));
const jsonResponse = {
data: {
id: 1,
name: 'Mocked Data'
},
status: 'success'
};    
await route.fulfill({
status: 200,
contentType: 'application/json',
body: JSON.stringify(jsonResponse)
});
});
await page.goto('https://jsonplaceholder.typicode.com/posts/1');
await page.waitForTimeout(5000);
})