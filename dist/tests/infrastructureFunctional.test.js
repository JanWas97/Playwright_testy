"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elementgetnclick_1 = require("C:/Users/JA/Documents/Visual_studio/Playwright_testy/utilities/elementgetnclick");
const test_1 = require("@playwright/test");
const checkingifexist_1 = require("../utilities/checkingifexist");
test_1.test.only('Checking A2 thread', async ({ page }) => {
    test_1.test.slow();
    await page.goto('https://www.skyscrapercity.com/');
    await (0, elementgetnclick_1.click)(page, 'Cookies accepted', 'button:has-text("AGREE")');
    await loggingIn(page);
    await proceedingToDesiredSubfourm(page);
    const desiredThread = await (0, checkingifexist_1.existsOrDefault)(page, 'a[href="/threads/a2-ka%C5%82uszyn-kukuryki-by.475549/unread"]', 'Desired A2 thread');
    (0, test_1.expect)(desiredThread).toBeTruthy();
    const checkLatestReply = checkingLatestReplyTime(page);
    await checkLatestReply();
});
function checkingLatestReplyTime(page) {
    return async () => {
        try {
            const threadElement = await page.$('div.structItem.structItem--thread.js-inlineModContainer.js-threadListItem-475549:has(a[href="/threads/a2-ka%C5%82uszyn-kukuryki-by.475549/latest"])');
            if (threadElement) {
                const timestampElement = await threadElement.$('time[class="structItem-latestDate thread-replied-time--gtm u-dt"]');
                if (timestampElement) {
                    const timestampText = await timestampElement.innerText();
                    if (timestampText.includes('a moment ago')) {
                        console.log('A new reply was posted a moment ago.');
                    }
                    else {
                        console.log('No new reply posted "a moment ago". Current latest reply time:', timestampText);
                    }
                }
                else {
                    console.log('Timestamp element not found.');
                }
            }
            else {
                console.log('Thread element not found.');
            }
        }
        catch (error) {
            console.error('Error checking the latest reply:', error);
        }
    };
}
async function proceedingToDesiredSubfourm(page) {
    await (0, elementgetnclick_1.click)(page, 'Clicked forums button', 'span:has-text("Forums")');
    await (0, elementgetnclick_1.click)(page, 'Clicked Polish subforum', 'a[href="/forums/forum-polskich-wie%C5%BCowc%C3%B3w.45/"]');
    await (0, elementgetnclick_1.click)(page, 'Clicked road infrastructure subforum', 'a[href="https://www.skyscrapercity.com/forums/infrastruktura-drogowa.240/"]');
}
async function loggingIn(page) {
    await (0, elementgetnclick_1.click)(page, 'Clicked login button', 'a[class="new-navigation new-navigation-login button"]');
    await page.fill('input[name="login"]', 'pestka13');
    await page.fill('input[name="password"]', 'aw321123');
    await page.waitForSelector('span:has-text("Stay logged in")');
    await (0, elementgetnclick_1.click)(page, 'Unchecked box', 'span:has-text("Stay logged in")');
    await (0, elementgetnclick_1.click)(page, 'Clicked login button', 'button:has-text("Log in")');
}
