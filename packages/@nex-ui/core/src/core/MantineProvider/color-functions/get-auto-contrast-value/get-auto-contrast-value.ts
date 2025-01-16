import type { NexTheme } from '../../theme.types';

export function getAutoContrastValue(autoContrast: boolean | undefined, theme: NexTheme) {
  return typeof autoContrast === 'boolean' ? autoContrast : theme.autoContrast;
}
