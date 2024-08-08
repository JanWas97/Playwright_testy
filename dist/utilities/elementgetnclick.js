"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.click = exports.get = void 0;
async function get(page, description, selector) {
    await page.waitForSelector(selector);
    const contentAddElement = await page.$(selector);
    if (contentAddElement) {
        console.log(`[${Date.now()}][Success] Received '${description}'`);
        return contentAddElement;
    }
    console.error(`[${Date.now()}][Error] Not found ${description} with selector ${selector}`);
    throw new Error("Failed with error. Error above on console");
}
exports.get = get;
async function click(page, description, selector) {
    const element = await get(page, description, selector);
    await element.click();
}
exports.click = click;
