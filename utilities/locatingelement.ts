import { Page } from "@playwright/test";



export async function locate(page: Page, selector: string, locatedElement: string): Promise<string> {
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
        } else {
          console.log(`[${Date.now()}][Error]'Could not retrieve bounding box of ${locatedElement}.'`);
          throw new Error(`[${Date.now()}][Error]'${locatedElement} doesnt exist'`);
        }
      } else {
        console.log(`[${Date.now()}][Error]'${locatedElement} does not exist.'`);
        throw new Error(`[${Date.now()}][Error]'${locatedElement} doesnt exist'`);
      }
  
    } catch (error: any) {
      console.error(`[${Date.now()}][Error] 'An error occurred:'`, error.message);
      return `An error occurred: ${error.message}`;
    }
  }