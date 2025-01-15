import path from 'node:path';
import fs from 'fs-extra';
import { $ } from 'zx';
import { createLogger } from 'scripts/utils/signale';

const logger = createLogger('generate-dts');

export async function generateDts(packagePath: string) {

  try {
    const currentPath = path.join(packagePath, 'tsconfig.build.json')
    logger.log(`Building types from 'tsconfig.build.json' on ${currentPath}`);
    await $`yarn tsc --project ${currentPath}`;
  } catch (err) {
    logger.error(`Failed to building types of 'tsconfig.build.json'`);
    logger.error(err);
  }
  

  // Duplicate the type definitions for ESM
  await fs.copy(
    path.join(packagePath, 'lib/index.d.ts'),
    path.join(packagePath, 'lib/index.d.mts')
  );
}
