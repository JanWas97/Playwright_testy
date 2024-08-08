"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadTimes = void 0;
async function loadTimes(page) {
    await page.waitForLoadState("load");
    const timing = JSON.parse(await page.evaluate(() => JSON.stringify(window.performance.timing)));
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    const domContentLoadedTime = timing.domContentLoadedEventEnd - timing.navigationStart;
    console.log(`Page Load Time: ${loadTime}ms`);
    console.log(`DOM Content Loaded Time: ${domContentLoadedTime}ms`);
}
exports.loadTimes = loadTimes;
