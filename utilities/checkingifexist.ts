import { Page } from "@playwright/test";

export async function existsOrDefault(page: Page, selector: string, elementLog: string): Promise<boolean> {
    const checkedElement = await page.$(selector);
  
    if (checkedElement) {
      console.log(`[${Date.now()}][Success] ${elementLog} exists`);

      return true;
    } else {

    console.log(`[${Date.now()}][Error]${elementLog} doesn't exist`);

    throw new Error('Received not what was expected');
    }
  }