export async function takescreenshot(page: { screenshot: (arg0: { path: string; }) => any; }) {
    await page.screenshot({ path: 'C:/Users/JA/Pictures/script/test_screenshot.jpg' });
    console.log('Screenshot captured.');
}