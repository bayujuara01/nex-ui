import { isNumberLike } from '../is-number-like/is-number-like';
import { rem } from '../units-converters';

const preferredRadius = new Map<string | unknown, string>([[ 'xs', '2xs'],
  [ 'sm', '2xs'],
  [ 'md', 'xs'],
  [ 'lg', 'sm'],
  [ 'xl', 'sm'],
  [ '2xl', 'sm']
]);

export function getSize(size: unknown, prefix = 'size', convertToRem = true): string | undefined {
  if (size === undefined) {
    return undefined;
  }

  return isNumberLike(size)
    ? convertToRem
      ? rem(size)
      : (size as string)
    : `var(--${prefix}-${size})`;
}

export function getSpacing(size: unknown) {
  return getSize(size, 'mantine-spacing');
}

export function getRadius(size: unknown) {
  if (size === undefined) {
    return 'var(--mantine-radius-default)';
  }

  return getSize(size, 'mantine-radius');
}

export function getPreferRadius(size: unknown) {
  if (size === undefined) {
    return 'var(--nex-radius-default)';
  }

  return getSize(preferredRadius.get(size), 'nex-radius');
}

export function getFontSize(size: unknown) {
  return getSize(size, 'mantine-font-size');
}

export function getLineHeight(size: unknown) {
  return getSize(size, 'mantine-line-height', false);
}

export function getShadow(size: unknown) {
  if (!size) {
    return undefined;
  }

  return getSize(size, 'mantine-shadow', false);
}
