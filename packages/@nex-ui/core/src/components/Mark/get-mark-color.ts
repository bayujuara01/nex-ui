import { MantineColor, NexTheme, parseThemeColor } from '../../core';

interface GetMarkColorInput {
  color: MantineColor | string | undefined;
  theme: NexTheme;
  defaultShade: number;
}

export function getMarkColor({ color, theme, defaultShade }: GetMarkColorInput) {
  const parsed = parseThemeColor({ color, theme });

  if (!parsed.isThemeColor) {
    return color;
  }

  if (parsed.shade === undefined) {
    return `var(--mantine-color-${parsed.color}-${defaultShade})`;
  }

  return `var(${parsed.variable})`;
}
