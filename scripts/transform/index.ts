import { componentsDir, traverseDirectory, updateImports, updateImportTest, logger } from './transform-file';

(() => {
  traverseDirectory(componentsDir, [updateImports, updateImportTest]);
  logger.log('Import replacement completed!');
})();
