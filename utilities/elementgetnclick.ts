import { ElementHandle, Page } from "playwright";
export async function get(page: Page, description: string, selector: string): Promise<ElementHandle<SVGElement | HTMLElement>> {
 
    await page.waitForSelector(selector);
    const contentAddElement = await page.$(selector);
 
    if (contentAddElement) {
        console.log(`[${Date.now()}][Success] Received '${description}'`);
 
        return contentAddElement;
    }
 
    console.error(`[${Date.now()}][Error] Not found ${description} with selector ${selector}`);
 
    throw new Error("Failed with error. Error above on console");
}
 
export async function click(page: Page, description: string, selector: string): Promise<any> {
 
    const element = await get(page, description, selector);
 
    await element.click();
}