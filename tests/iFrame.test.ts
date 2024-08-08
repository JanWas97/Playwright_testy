import { click } from 'C:/Users/JA/Documents/Visual_studio/Playwright_testy/utilities/elementgetnclick';
import { test } from '@playwright/test';
test('Iframe testing', async ({ page })  => { 
test.slow();    
await page.goto('https://tvn24.pl/');
await click(page, 'Accepted cookies','#onetrust-accept-btn-handler');
const iframeElementHandle = await page.waitForSelector('body > iframe.__ipPerunElement');
const frame = await iframeElementHandle.contentFrame();
if (frame) {
await frame.click('p[class="__ipPopupClose"]');
console.log('Pop-up dismissed by clicking an element within an iframe')
} else {
console.error('Iframe not found!');
}
await click(page, 'Clicked biznes button', 'a[href="/biznes"]');
await page.evaluate(() => {
window.scrollBy(0.5, window.innerHeight);
});
await click(page, 'Clicked show more', 'div[class="sc-c59qa8-0 TextBoxWrapper-sc-1okctb2-0 ejktja dYxSXU stock-quotes-current-rates-2iajrp TextBox"]');
await page.waitForTimeout(5000);
await page.goBack();
await click(page, 'Clicked news of the day item','//div[@class="news-of-the-day__item-content" and text()="Podwyżki i promocje. Co czeka kierowców"]');
await page.goBack();
const secondIFrameElementHandle = await page.waitForSelector('iframe[name="google_ads_iframe_/65073904/11070110/K_TVN_24_BIS/main_page/panel_pod_1_artykulem_0"]');
const secondFrame = await secondIFrameElementHandle.contentFrame();
if (secondFrame) {
await secondFrame.click('a[href="https://adclick.g.doubleclick.net/aclk?sa=l&amp;ai=C5utbmu1-Zu2TL7ediM0PobCmkA_FqrLod4SbyqHxEq-jy9KUDhABIMHk0ilg6eTJhdgaoAHmyNLCKcgBCakCv5FII_GmkD7gAgCoAwHIAwqqBNUCT9AGIc-dBoF3qlRLyoij2YOf3qnDSRZPr83dtoWehZfLGqr3QH1fqw61GPEIiY9A6ys7Ys3YyhBmJ0NAZ0b2VYPI7UNPQ2ormzSu5zh921LG62NevCPC2L432V9L2kI-NwFMCLo7mr5TzkSAySJ9Ozfm0UXEXjMKulmupoe5DsPdP3hrSfPqlFnUkxHjIvzTqOrmLxAeVRi_1H6GOVFEf-7wEj5tObMEdFeCHEzwIdWNbVr51V3kZp09ja3apql9ZhiRKft1wgpM4m6UvAcvLGP2RWYBee628M8IgJO_NP6KOtx8XJrazEPoQPtaSX7vsGbqbgLTP4c-ahsc0_O7u5cItJiO1wFkvm3Zo31gf1_nvl8PhDt0bv20ZaeOEveAq92Us1lU9XnsgDZKz3z-l72ogdD5IJ2wsvxvqfJkeKsivJPxmrKl3P_N2O0WY5g3V8eb7PHABLSU_MfpBOAEAYgF-ffa5k6gBi6AB-aAo6IEqAfZtrECqAfVyRuoB6a-G6gHjs4bqAeT2BuoB-6WsQKoB_6esQKoB6--sQKoB5oGqAfz0RuoB5bYG6gHqpuxAqgHg62xAqgH4L2xAqgH_56xAqgH35-xAqgHyqmxAqgH66WxAqgH6rGxAqgHmbWxAqgHvrexAqgH-MKxAqgH-8KxAtgHANIILAiA4YAQEAEYHTIHqoKA4J-AAToKgMADgICEgICUDki9_cE6WKLFtqjk_oYDsQngywxG77HmgYAKA5gLAcgLAYAMAdoMEAoKEJDht-644PfxfxICAQOqDQJQTMgNAeINEwjQtreo5P6GAxW3DqIDHSGYCfLYEwzQFQH4FgGAFwGyGAkSApFUGC4iAQA&amp;ae=1&amp;ase=2&amp;gclid=EAIaIQobChMI7ci7qOT-hgMVtw6iAx0hmAnyEAEYASAAEgJTGvD_BwE&amp;num=1&amp;cid=CAQSTgDaQooL1eWvTdwKXTJcCE8czX2ey0F6zEw0lRbou4f18UCwF4nHPZ99iVrGmSdLb9GNPgF-reHPlebhFr4e2sFOGdz1bPToLyzt9fJ4eBgB&amp;sig=AOD64_0OquTQFfth88f4DP7CycS9qeYDiw&amp;client=ca-pub-4278860704973981&amp;rf=4&amp;nb=8&amp;adurl=https://harmonygroup.pl/inwestycje/czarna-perla%3Fgclid%3DEAIaIQobChMI7ci7qOT-hgMVtw6iAx0hmAnyEAEYASAAEgJTGvD_BwE"]');    
console.log('Second Iframe found and engaged')
} else {
console.error('Second Iframe not found')
}
await page.waitForTimeout(5000);
}) 


