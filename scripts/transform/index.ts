import { componentsDir, appsDir, traverseDirectory, updateImports, updateImportTest, updateImportMDX, logger } from './transform-file';

(() => {
  traverseDirectory(componentsDir, [updateImports, updateImportTest]);
  logger.log(`Import replacement at [${componentsDir}] completed!`);

  traverseDirectory(appsDir, [updateImports, updateImportTest, updateImportMDX]);
  logger.log(`Import replacement at [${appsDir}] completed!`);
})();
