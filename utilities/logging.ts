// logUtils.ts
import { appendFileSync } from 'fs';

export function logSuccess(message: string): void {
    console.log(`SUCCESS: ${message}`);
    appendFileSync('success.log', `SUCCESS: ${message}\n`);
}

export function logError(message: string): void {
    console.error(`ERROR: ${message}`);
    appendFileSync('error.log', `ERROR: ${message}\n`);
}

