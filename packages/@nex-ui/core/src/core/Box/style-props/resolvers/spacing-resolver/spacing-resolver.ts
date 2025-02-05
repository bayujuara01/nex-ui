import { NexTheme } from '../../../../NexProvider';
import { rem } from '../../../../utils';

export function spacingResolver(value: unknown, theme: NexTheme) {
  if (typeof value === 'number') {
    return rem(value);
  }

  if (typeof value === 'string') {
    const mod = value.replace('-', '');

    if (!(mod in theme.spacing)) {
      return rem(value);
    }

    const variable = `--mantine-spacing-${mod}`;
    return value.startsWith('-') ? `calc(var(${variable}) * -1)` : `var(${variable})`;
  }

  return value;
}
