import { Page, test } from '@playwright/test';
test('Drag n drop in iFrame', async ({ page }) => {
await page.goto('https://codepen.io/miclgael/pen/JqWJma');
await page.waitForTimeout(2000);
await performingDragInIframe(page);
});














async function performingDragInIframe(page: Page) {
    try {
        const iframeElementHandle = await page.waitForSelector('#result');
        const iframe = await iframeElementHandle.contentFrame();
        if (!iframe) {
            console.log(`[${Date.now()}][Error] Could not get iframe content`);
            throw new Error;
        }
        const dragSelector = '#p1';
        const dropSelector = '#target';
        const dragElement = await iframe.$(dragSelector);
        const dropElement = await iframe.$(dropSelector);
        if (dragElement && dropElement) {
            const dragBox = await dragElement.boundingBox();
            const dropBox = await dropElement.boundingBox();
            if (dragBox && dropBox) {
                await page.mouse.move(dragBox.x + dragBox.width / 2, dragBox.y + dragBox.height / 2);
                await page.mouse.down();
                await page.mouse.move(dropBox.x + dropBox.width / 2, dropBox.y + dropBox.height / 2);
                await page.mouse.up();
                console.log(`[${Date.now()}][Success] Drag and drop operation passed`);
            } else {
                console.log(`[${Date.now()}][Error] Drag and drop operation failed`);
                throw new Error('Bounding box calculation failed');
            }
        } else {
            console.log(`[${Date.now()}][Error] Element selection failed`);
            throw new Error('Element selection failed');
        }
    } catch (error: any) {
        console.error(`[${Date.now()}][Exception] ${error.message}`);
        throw error;
    } finally {
        await page.waitForTimeout(2000);
    }
}

