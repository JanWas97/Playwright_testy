"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locate = void 0;
async function locate(page, selector, locatedElement) {
    try {
        const elementSelector = selector;
        await page.waitForSelector(elementSelector);
        const elementHandle = await page.$(elementSelector);
        if (elementHandle) {
            const boundingBox = await elementHandle.boundingBox();
            if (boundingBox) {
                const position = JSON.stringify(boundingBox, null, 2);
                console.log(`[${Date.now()}][Success] ${locatedElement}: ${position}`);
                return position;
            }
            else {
                console.log(`[${Date.now()}][Error]'Could not retrieve bounding box of ${locatedElement}.'`);
                throw new Error(`[${Date.now()}][Error]'${locatedElement} doesnt exist'`);
            }
        }
        else {
            console.log(`[${Date.now()}][Error]'${locatedElement} does not exist.'`);
            throw new Error(`[${Date.now()}][Error]'${locatedElement} doesnt exist'`);
        }
    }
    catch (error) {
        console.error(`[${Date.now()}][Error] 'An error occurred:'`, error.message);
        return `An error occurred: ${error.message}`;
    }
}
exports.locate = locate;
