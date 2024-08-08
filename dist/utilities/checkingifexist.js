"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.existsOrDefault = void 0;
async function existsOrDefault(page, selector, elementLog) {
    const elementSelector = selector;
    const checkedElement = await page.$(elementSelector);
    if (checkedElement) {
        console.log(`[${Date.now()}][Success] ${elementLog} exists`);
        return true;
    }
    console.log(`[${Date.now()}][Error]${elementLog} doesn't exist`);
    return false;
}
exports.existsOrDefault = existsOrDefault;
