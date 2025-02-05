import path from 'node:path';
import fs from 'fs-extra';
import { $, ProcessOutput } from 'zx';
import { createLogger } from 'scripts/utils/signale';
import chalk from "chalk";

const logger = createLogger('generate-dts')

export async function generateDts(packagePath: string) {

  try {
    const currentPath = path.join(packagePath, 'tsconfig.build.json')
    await $`yarn tsc --project ${currentPath}`
  } catch (err) {
    logger.error(`Failed to building types of 'tsconfig.build.json'`)
    if (err instanceof ProcessOutput) {
      // Beautify and colorize the TSC error output
      const formattedError = err.stderr || err.stdout
        .split('\n')
        .map((line) => {
          if (line.includes('error TS')) {
            return chalk.redBright(line); // Highlight TypeScript errors
          } else if (line.includes('warning')) {
            return chalk.yellow(line); // Highlight warnings
          }
          return chalk.white(line); // Default for other lines
        })
        .join('\n');

      logger.error(`${formattedError}`);
    }
  }


  // Duplicate the type definitions for ESM
  await fs.copy(
    path.join(packagePath, 'lib/index.d.ts'),
    path.join(packagePath, 'lib/index.d.mts')
  );
}
