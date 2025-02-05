import { NexTheme, parseThemeColor } from '../../../../NexProvider';

export function colorResolver(color: unknown, theme: NexTheme) {
  const parsedColor = parseThemeColor({ color, theme });

  if (parsedColor.color === 'dimmed') {
    return 'var(--mantine-color-dimmed)';
  }

  if (parsedColor.color === 'bright') {
    return 'var(--mantine-color-bright)';
  }
  return parsedColor.variable ? `var(${parsedColor.variable})` : parsedColor.color;
}

export function textColorResolver(color: unknown, theme: NexTheme) {
  const parsedColor = parseThemeColor({ color, theme });

  if (parsedColor.isThemeColor && parsedColor.shade === undefined) {
    return `var(--mantine-color-${parsedColor.color}-text)`;
  }

  return colorResolver(color, theme);
}
