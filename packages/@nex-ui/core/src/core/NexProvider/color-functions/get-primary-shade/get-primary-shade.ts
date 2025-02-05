import type { MantineColorScheme, NexTheme } from '../../theme.types';

export function getPrimaryShade(theme: NexTheme, colorScheme: MantineColorScheme) {
  if (typeof theme.primaryShade === 'number') {
    return theme.primaryShade;
  }

  if (colorScheme === 'dark') {
    return theme.primaryShade.dark;
  }

  return theme.primaryShade.light;
}
