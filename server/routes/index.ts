import { readFile } from 'fs/promises';
import { resolve } from 'path';

export default defineEventHandler(async () => {
  
  const htmlPath = resolve('public/index.html');
  const htmlContent = await readFile(htmlPath, 'utf-8');

  return htmlContent;
});
