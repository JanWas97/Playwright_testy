import { Page } from "@playwright/test";

export async function checkingDragnDrop(page: Page, draggableSelector: string, dropSelector: string,): Promise<void> {
  
  const dropZone = await page.waitForSelector(dropSelector);
  const draggableElement = await page.waitForSelector(draggableSelector)
  const containsElement = await dropZone.evaluate((drop, draggable) => drop.contains(draggable), draggableElement);

  if (!containsElement) {
    console.log(`[${Date.now()}][Error] Drop zone doesn't contain the draggable element`);
    throw new Error;
  }

  console.log(`[${Date.now()}][Success] Drop zone contains the draggable element`);
}