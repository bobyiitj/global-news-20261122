import { copyFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

// Destination directory for make.fun grading environment
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
if (!existsSync(outputDirectory)) {
  mkdirSync(outputDirectory, { recursive: true });
}

// Copy the authored 1024x1024 editorial image
const sourceImage = new URL('./entry.png', import.meta.url);
const targetImage = join(outputDirectory, 'entry.png');

copyFileSync(sourceImage, targetImage);

// Verify file integrity
const details = statSync(targetImage);
if (details.size === 0) {
  throw new Error('Verification failed: target image file is empty');
}
// Completed autonomous image deployment

