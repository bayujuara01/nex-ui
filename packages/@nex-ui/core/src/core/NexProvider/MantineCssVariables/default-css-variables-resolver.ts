import { keys, rem } from '../../utils';
import { getPrimaryContrastColor, getPrimaryShade } from '../color-functions';
import { ConvertCSSVariablesInput } from '../convert-css-variables';
import { NexTheme } from '../theme.types';
import { getCSSColorVariables } from './get-css-color-variables';
import { isVirtualColor } from './virtual-color/virtual-color';

export type CSSVariablesResolver = (theme: NexTheme) => ConvertCSSVariablesInput;

function assignSizeVariables(
  variables: Record<string, string>,
  sizes: Record<string, string>,
  name: string
) {
  keys(sizes).forEach((size) =>
    Object.assign(variables, {
      [`--mantine-${name}-${size}`]: sizes[size],
      [`--nex-${name}-${size}`]: `var(--mantine-${name}-${size})`,
    })
  );
}

export const defaultCssVariablesResolver: CSSVariablesResolver = (theme) => {
  const lightPrimaryShade = getPrimaryShade(theme, 'light');
  const defaultRadius =
    theme.defaultRadius in theme.radius
      ? theme.radius[theme.defaultRadius as 'xs']
      : rem(theme.defaultRadius);

  const result: ConvertCSSVariablesInput = {
    variables: {
      '--mantine-scale': theme.scale.toString(),
      '--mantine-cursor-type': theme.cursorType,
      '--mantine-color-scheme': 'light dark',
      '--mantine-webkit-font-smoothing': theme.fontSmoothing ? 'antialiased' : 'unset',
      '--mantine-moz-font-smoothing': theme.fontSmoothing ? 'grayscale' : 'unset',
      '--mantine-color-white': theme.white,
      '--mantine-color-black': theme.black,
      '--mantine-line-height': theme.lineHeights.md,
      '--mantine-font-family': theme.fontFamily,
      '--mantine-font-family-monospace': theme.fontFamilyMonospace,
      '--mantine-font-family-headings': theme.headings.fontFamily,
      '--mantine-heading-font-weight': theme.headings.fontWeight,
      '--mantine-heading-text-wrap': theme.headings.textWrap,
      '--mantine-radius-default': defaultRadius,

      '--nex-scale': 'var(--mantine-scale)',
      '--nex-cursor-type': 'var(--mantine-cursor-type)',
      '--nex-color-scheme': 'var(--mantine-color-scheme)',
      '--nex-webkit-font-smoothing': 'var(--mantine-webkit-font-smoothing)',
      '--nex-moz-font-smoothing': 'var(--mantine-moz-font-smoothing)',
      '--nex-color-white': 'var(--mantine-color-white)',
      '--nex-color-black': 'var(--mantine-color-black)',
      '--nex-line-height': 'var(--mantine-line-height)',
      '--nex-font-family': 'var(--mantine-font-family)',
      '--nex-font-family-monospace': 'var(--mantine-font-family-monospace)',
      '--nex-font-family-headings': 'var(--mantine-font-family-headings)',
      '--nex-heading-font-weight': 'var(--mantine-heading-font-weight)',
      '--nex-heading-text-wrap': 'var(--mantine-heading-text-wrap)',
      '--nex-radius-default': 'var(--mantine-radius-default)',

      // Primary colors
      '--mantine-primary-color-filled': `var(--mantine-color-${theme.primaryColor}-filled)`,
      '--mantine-primary-color-filled-hover': `var(--mantine-color-${theme.primaryColor}-filled-hover)`,
      '--mantine-primary-color-light': `var(--mantine-color-${theme.primaryColor}-light)`,
      '--mantine-primary-color-light-hover': `var(--mantine-color-${theme.primaryColor}-light-hover)`,
      '--mantine-primary-color-light-color': `var(--mantine-color-${theme.primaryColor}-light-color)`,

      '--nex-primary-color-filled': `var(--mantine-color-${theme.primaryColor}-filled)`,
      '--nex-primary-color-filled-hover': `var(--mantine-color-${theme.primaryColor}-filled-hover)`,
      '--nex-primary-color-light': `var(--mantine-color-${theme.primaryColor}-light)`,
      '--nex-primary-color-light-hover': `var(--mantine-color-${theme.primaryColor}-light-hover)`,
      '--nex-primary-color-light-color': `var(--mantine-color-${theme.primaryColor}-light-color)`,
    },
    light: {
      '--mantine-primary-color-contrast': getPrimaryContrastColor(theme, 'light'),
      '--mantine-color-bright': 'var(--mantine-color-black)',
      '--mantine-color-text': theme.black,
      '--mantine-color-body': theme.white,
      '--mantine-color-error': 'var(--mantine-color-red-6)',
      '--mantine-color-placeholder': 'var(--mantine-color-gray-5)',
      '--mantine-color-anchor': `var(--mantine-color-${theme.primaryColor}-${lightPrimaryShade})`,
      '--mantine-color-default': 'var(--mantine-color-white)',
      '--mantine-color-default-hover': 'var(--mantine-color-gray-0)',
      '--mantine-color-default-color': 'var(--mantine-color-black)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
      '--mantine-color-dimmed': 'var(--mantine-color-gray-6)',

      '--nex-primary-color-contrast': 'var(--mantine-primary-color-contrast)',
      '--nex-color-bright': 'var(--mantine-color-black)',
      '--nex-color-text': 'var(--mantine-color-text)',
      '--nex-color-body': 'var(--mantine-color-body)',
      '--nex-color-error': 'var(--mantine-color-red-6)',
      '--nex-color-placeholder': 'var(--mantine-color-gray-5)',
      '--nex-color-anchor': `var(--mantine-color-${theme.primaryColor}-${lightPrimaryShade})`,
      '--nex-color-default': 'var(--mantine-color-white)',
      '--nex-color-default-hover': 'var(--mantine-color-gray-0)',
      '--nex-color-default-color': 'var(--mantine-color-black)',
      '--nex-color-default-border': 'var(--mantine-color-gray-4)',
      '--nex-color-dimmed': 'var(--mantine-color-gray-6)',
    },
    dark: {
      '--mantine-primary-color-contrast': getPrimaryContrastColor(theme, 'dark'),
      '--mantine-color-bright': 'var(--mantine-color-white)',
      '--mantine-color-text': 'var(--mantine-color-dark-0)',
      '--mantine-color-body': 'var(--mantine-color-dark-7)',
      '--mantine-color-error': 'var(--mantine-color-red-8)',
      '--mantine-color-placeholder': 'var(--mantine-color-dark-3)',
      '--mantine-color-anchor': `var(--mantine-color-${theme.primaryColor}-4)`,
      '--mantine-color-default': 'var(--mantine-color-dark-6)',
      '--mantine-color-default-hover': 'var(--mantine-color-dark-5)',
      '--mantine-color-default-color': 'var(--mantine-color-white)',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-dimmed': 'var(--mantine-color-dark-2)',

      '--nex-primary-color-contrast': 'var(--mantine-primary-color-contrast)',
      '--nex-color-bright': 'var(--mantine-color-white)',
      '--nex-color-text': 'var(--mantine-color-dark-0)',
      '--nex-color-body': 'var(--mantine-color-dark-7)',
      '--nex-color-error': 'var(--mantine-color-red-8)',
      '--nex-color-placeholder': 'var(--mantine-color-dark-3)',
      '--nex-color-anchor': `var(--mantine-color-${theme.primaryColor}-4)`,
      '--nex-color-default': 'var(--mantine-color-dark-6)',
      '--nex-color-default-hover': 'var(--mantine-color-dark-5)',
      '--nex-color-default-color': 'var(--mantine-color-white)',
      '--nex-color-default-border': 'var(--mantine-color-dark-4)',
      '--nex-color-dimmed': 'var(--mantine-color-dark-2)',
    },
  };

  assignSizeVariables(result.variables, theme.breakpoints, 'breakpoint');
  assignSizeVariables(result.variables, theme.spacing, 'spacing');
  assignSizeVariables(result.variables, theme.fontSizes, 'font-size');
  assignSizeVariables(result.variables, theme.lineHeights, 'line-height');
  assignSizeVariables(result.variables, theme.shadows, 'shadow');
  assignSizeVariables(result.variables, theme.radius, 'radius');

  theme.colors[theme.primaryColor].forEach((_, index) => {
    result.variables[`--mantine-primary-color-${index}`] =  `var(--mantine-color-${theme.primaryColor}-${index})`;
    result.variables[`--nex-primary-color-${index}`] =  `var(--mantine-primary-color-${index})`;
  });

  keys(theme.colors).forEach((color) => {
    const value = theme.colors[color];

    if (isVirtualColor(value)) {
      Object.assign(
        result.light,
        getCSSColorVariables({
          theme,
          name: value.name,
          color: value.light,
          colorScheme: 'light',
          withColorValues: true,
        })
      );

      Object.assign(
        result.dark,
        getCSSColorVariables({
          theme,
          name: value.name,
          color: value.dark,
          colorScheme: 'dark',
          withColorValues: true,
        })
      );

      return;
    }

    value.forEach((shade, index) => {
      result.variables[`--mantine-color-${color}-${index}`] = shade;
      result.variables[`--nex-color-${color}-${index}`] = `var(--mantine-color-${color}-${index})`;
    });

    Object.assign(
      result.light,
      getCSSColorVariables({
        theme,
        color,
        colorScheme: 'light',
        withColorValues: false,
      })
    );

    Object.assign(
      result.dark,
      getCSSColorVariables({
        theme,
        color,
        colorScheme: 'dark',
        withColorValues: false,
      })
    );
  });

  const headings = theme.headings.sizes;

  keys(headings).forEach((heading) => {
    result.variables[`--mantine-${heading}-font-size`] = headings[heading].fontSize;
    result.variables[`--mantine-${heading}-line-height`] = headings[heading].lineHeight;
    result.variables[`--mantine-${heading}-font-weight`] = headings[heading].fontWeight || theme.headings.fontWeight;
    result.variables[`--nex-${heading}-font-size`] = `var(${`--mantine-${heading}-font-size`}`;
    result.variables[`--nex-${heading}-line-height`] = `var(${`--mantine-${heading}-line-height`}`;
    result.variables[`--nex-${heading}-font-weight`] = `var(${`--mantine-${heading}-font-weight`}`;
  });

  return result;
};
