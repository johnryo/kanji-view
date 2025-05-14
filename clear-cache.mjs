import { rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dir = join(__dirname, '.next');
rmSync(dir, { recursive: true, force: true });

console.log('.next folder deleted');
