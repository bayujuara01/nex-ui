import fs from 'node:fs';
import path from 'node:path';
import { createLogger } from '../utils/signale';

export const logger = createLogger('transform-file');

// Function to recursively traverse directories
export function traverseDirectory(dir: string, callbacks: ((filePath: string) => void)[]) {
  logger.log(`Directory : ${dir}`)
  const files = fs.readdirSync(dir);
  logger.log(files)
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      traverseDirectory(filePath, callbacks);
    } else if (stats.isFile()) {
      callbacks.forEach((callback) => callback(filePath));
    }
  });
}

// Function to update imports in a file
export function updateImports(filePath: string) {
  const fileExtensions = ['.ts', '.tsx'];
  if (!fileExtensions.includes(path.extname(filePath))) {
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Regular expression to find and replace the import statement
  const updatedContent = content.replace(
    /(import\s+[\s\S]*?\s+from\s+['"])@mantine\/([^'"]+)(['"])/g,
    '$1@nex-ui/$2$3'
  );

  const updatedContentExtension = updatedContent.replace(
    /(import\s+[\s\S]*?\s+from\s+['"])@mantinex\/([^'"]+)(['"])/g,
    '$1@nex-uix/$2$3'
  );

  if (content !== updatedContentExtension) {
    fs.writeFileSync(filePath, updatedContentExtension, 'utf8');
    logger.log(`Updated imports in: ${filePath}`);
  }
}

export function updateImportTest(filePath: string) {
  const fileExtensions = ['.test.ts', '.test.tsx'];

  if (!fileExtensions.some(extension => filePath.endsWith(extension))) {
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Regular expression to find and replace the import statement
  const updatedContent = content.replace(
    /(import\s+[\s\S]*?\s+from\s+['"])@mantine-tests\/([^'"]+)(['"])/g,
    '$1@nex-ui-tests/$2$3'
  );

  if (content !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    logger.log(`Updated test imports in: ${filePath}`);
  }
}

// Starting point
export const componentsDir = './packages';
