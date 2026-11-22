import { copyFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
if (!existsSync(targetDir)) {
  mkdirSync(targetDir, { recursive: true });
}

const sourceUrl = new URL('./entry.png', import.meta.url);
const destPath = join(targetDir, 'entry.png');

copyFileSync(sourceUrl, destPath);

const stat = statSync(destPath);
if (stat.size === 0) {
  throw new Error('Copied image file is empty');
}
