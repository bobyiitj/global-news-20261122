import { copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
if (!existsSync(targetDir)) {
  mkdirSync(targetDir, { recursive: true });
}

const sourcePath = new URL('./entry.png', import.meta.url);
const destPath = join(targetDir, 'entry.png');
copyFileSync(sourcePath, destPath);
