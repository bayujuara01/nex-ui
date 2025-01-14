import { componentsDir, traverseDirectory, updateImports, logger } from './transform-file';

(() => {
  traverseDirectory(componentsDir, updateImports);
  logger.log('Import replacement completed!');
})();