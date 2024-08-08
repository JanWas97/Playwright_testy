import { Page } from "@playwright/test";

export async function draggin(page: Page, dragSelector: string, dropSelector: string): Promise<boolean> {
  try {
    const dragElement = await page.$(dragSelector);
    const dropElement = await page.$(dropSelector);

    if (!dragElement || !dropElement) {
      console.log(`[${Date.now()}][Error] Element selection failed`);
      throw new Error;
    }

    const initialPosition = await dragElement.boundingBox();
    if (!initialPosition) {
      console.log(`[${Date.now()}][Error] Could not get initial position${dragElement}`);
      throw new Error;
    }

    const dragBox = await dragElement.boundingBox();
    const dropBox = await dropElement.boundingBox();

    if (!dragBox || !dropBox) {
      console.log(`[${Date.now()}][Error] Bounding box calculation failed${dropElement}`);
      throw new Error;
    }

    await page.mouse.move(dragBox.x + dragBox.width / 2, dragBox.y + dragBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(dropBox.x + dropBox.width / 2, dropBox.y + dropBox.height / 2);
    await page.mouse.up();

    const newPosition = await dragElement.boundingBox();
    if (!newPosition) {
      console.log(`[${Date.now()}][Error] Could not get new position`);
      throw new Error;
    }

    const hasMoved = initialPosition.x !== newPosition.x || initialPosition.y !== newPosition.y;

    if (hasMoved) {
      console.log(`[${Date.now()}][Success] Drag and drop operation passed`);
    } else {
      console.log(`[${Date.now()}][Error] Drag and drop operation failed`);
      throw new Error;
    }

    return hasMoved;
  } catch (error: any) {
    throw error;
  }
}

