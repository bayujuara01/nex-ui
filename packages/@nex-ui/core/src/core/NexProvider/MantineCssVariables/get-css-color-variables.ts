import { alpha, getPrimaryShade } from '../color-functions';
import { MantineColor, NexTheme } from '../theme.types';

interface GetColorVariablesInput {
  theme: NexTheme;
  color: MantineColor;
  colorScheme: 'light' | 'dark';
  name?: string;
  withColorValues?: boolean;
}

export function getCSSColorVariables({
  theme,
  color,
  colorScheme,
  name = color,
  withColorValues = true,
}: GetColorVariablesInput) {
  if (!theme.colors[color]) {
    return {};
  }

  if (colorScheme === 'light') {
    const primaryShade = getPrimaryShade(theme, 'light');

    const dynamicVariables = {
      [`--mantine-color-${name}-text`]: `var(--mantine-color-${name}-filled)`,
      [`--mantine-color-${name}-filled`]: `var(--mantine-color-${name}-${primaryShade})`,
      [`--mantine-color-${name}-filled-hover`]: `var(--mantine-color-${name}-${
        primaryShade === 9 ? 8 : primaryShade + 1
      })`,
      [`--mantine-color-${name}-light`]: alpha(theme.colors[color][primaryShade], 0.1),
      [`--mantine-color-${name}-light-hover`]: alpha(theme.colors[color][primaryShade], 0.12),
      [`--mantine-color-${name}-light-color`]: `var(--mantine-color-${name}-${primaryShade})`,
      [`--mantine-color-${name}-outline`]: `var(--mantine-color-${name}-${primaryShade})`,
      [`--mantine-color-${name}-outline-hover`]: alpha(theme.colors[color][primaryShade], 0.05),

      // Nex UI Specific Color
      [`--nex-color-${name}-text`]: `var(--nex-color-${name}-filled)`,
      [`--nex-color-${name}-filled`]: `var(--nex-color-${name}-${primaryShade})`,
      [`--nex-color-${name}-filled-hover`]: `var(--nex-color-${name}-${
        primaryShade === 9 ? 8 : primaryShade + 1
      })`,
      [`--nex-color-${name}-light`]: alpha(theme.colors[color][primaryShade], 0.1),
      [`--nex-color-${name}-light-hover`]: alpha(theme.colors[color][primaryShade], 0.12),
      [`--nex-color-${name}-light-color`]: `var(--nex-color-${name}-${primaryShade})`,
      [`--nex-color-${name}-outline`]: `var(--nex-color-${name}-${primaryShade})`,
      [`--nex-color-${name}-outline-hover`]: alpha(theme.colors[color][primaryShade], 0.05),
    };

    if (!withColorValues) {
      return dynamicVariables;
    }

    return {
      [`--mantine-color-${name}-0`]: theme.colors[color][0],
      [`--mantine-color-${name}-1`]: theme.colors[color][1],
      [`--mantine-color-${name}-2`]: theme.colors[color][2],
      [`--mantine-color-${name}-3`]: theme.colors[color][3],
      [`--mantine-color-${name}-4`]: theme.colors[color][4],
      [`--mantine-color-${name}-5`]: theme.colors[color][5],
      [`--mantine-color-${name}-6`]: theme.colors[color][6],
      [`--mantine-color-${name}-7`]: theme.colors[color][7],
      [`--mantine-color-${name}-8`]: theme.colors[color][8],
      [`--mantine-color-${name}-9`]: theme.colors[color][9],

      // Nex UI Specific Color
      [`--nex-color-${name}-0`]: theme.colors[color][0],
      [`--nex-color-${name}-1`]: theme.colors[color][1],
      [`--nex-color-${name}-2`]: theme.colors[color][2],
      [`--nex-color-${name}-3`]: theme.colors[color][3],
      [`--nex-color-${name}-4`]: theme.colors[color][4],
      [`--nex-color-${name}-5`]: theme.colors[color][5],
      [`--nex-color-${name}-6`]: theme.colors[color][6],
      [`--nex-color-${name}-7`]: theme.colors[color][7],
      [`--nex-color-${name}-8`]: theme.colors[color][8],
      [`--nex-color-${name}-9`]: theme.colors[color][9],
      ...dynamicVariables,
    };
  }

  const primaryShade = getPrimaryShade(theme, 'dark');
  const dynamicVariables = {
    [`--mantine-color-${name}-text`]: `var(--mantine-color-${name}-4)`,
    [`--mantine-color-${name}-filled`]: `var(--mantine-color-${name}-${primaryShade})`,
    [`--mantine-color-${name}-filled-hover`]: `var(--mantine-color-${name}-${
      primaryShade === 9 ? 8 : primaryShade + 1
    })`,
    [`--mantine-color-${name}-light`]: alpha(
      theme.colors[color][Math.max(0, primaryShade - 2)],
      0.15
    ),
    [`--mantine-color-${name}-light-hover`]: alpha(
      theme.colors[color][Math.max(0, primaryShade - 2)],
      0.2
    ),
    [`--mantine-color-${name}-light-color`]: `var(--mantine-color-${name}-${Math.max(primaryShade - 5, 0)})`,
    [`--mantine-color-${name}-outline`]: `var(--mantine-color-${name}-${Math.max(primaryShade - 4, 0)})`,
    [`--mantine-color-${name}-outline-hover`]: alpha(
      theme.colors[color][Math.max(primaryShade - 4, 0)],
      0.05
    ),

    // Nex UI Specific Color
    [`--nex-color-${name}-text`]: `var(--nex-color-${name}-4)`,
    [`--nex-color-${name}-filled`]: `var(--nex-color-${name}-${primaryShade})`,
    [`--nex-color-${name}-filled-hover`]: `var(--nex-color-${name}-${
      primaryShade === 9 ? 8 : primaryShade + 1
    })`,
    [`--nex-color-${name}-light`]: alpha(
      theme.colors[color][Math.max(0, primaryShade - 2)],
      0.15
    ),
    [`--nex-color-${name}-light-hover`]: alpha(
      theme.colors[color][Math.max(0, primaryShade - 2)],
      0.2
    ),
    [`--nex-color-${name}-light-color`]: `var(--nex-color-${name}-${Math.max(primaryShade - 5, 0)})`,
    [`--nex-color-${name}-outline`]: `var(--nex-color-${name}-${Math.max(primaryShade - 4, 0)})`,
    [`--nex-color-${name}-outline-hover`]: alpha(
      theme.colors[color][Math.max(primaryShade - 4, 0)],
      0.05
    ),
  };

  if (!withColorValues) {
    return dynamicVariables;
  }

  return {
    [`--mantine-color-${name}-0`]: theme.colors[color][0],
    [`--mantine-color-${name}-1`]: theme.colors[color][1],
    [`--mantine-color-${name}-2`]: theme.colors[color][2],
    [`--mantine-color-${name}-3`]: theme.colors[color][3],
    [`--mantine-color-${name}-4`]: theme.colors[color][4],
    [`--mantine-color-${name}-5`]: theme.colors[color][5],
    [`--mantine-color-${name}-6`]: theme.colors[color][6],
    [`--mantine-color-${name}-7`]: theme.colors[color][7],
    [`--mantine-color-${name}-8`]: theme.colors[color][8],
    [`--mantine-color-${name}-9`]: theme.colors[color][9],

    // Nex UI Specific Color
    [`--nex-color-${name}-0`]: theme.colors[color][0],
    [`--nex-color-${name}-1`]: theme.colors[color][1],
    [`--nex-color-${name}-2`]: theme.colors[color][2],
    [`--nex-color-${name}-3`]: theme.colors[color][3],
    [`--nex-color-${name}-4`]: theme.colors[color][4],
    [`--nex-color-${name}-5`]: theme.colors[color][5],
    [`--nex-color-${name}-6`]: theme.colors[color][6],
    [`--nex-color-${name}-7`]: theme.colors[color][7],
    [`--nex-color-${name}-8`]: theme.colors[color][8],
    [`--nex-color-${name}-9`]: theme.colors[color][9],
    ...dynamicVariables,
  };
}
