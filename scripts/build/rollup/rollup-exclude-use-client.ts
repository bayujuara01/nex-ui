// Files names that should not have use client directive at the top of the output file
export const ROLLUP_EXCLUDE_USE_CLIENT = [
  'index',
  'core/utils/deep-merge/deep-merge',
  'core/utils/units-converters/rem',
  'core/utils/units-converters/px',
  'core/factory/create-polymorphic-component',
  'core/NexProvider/mantine-html-props',
  'core/NexProvider/create-theme/create-theme',
  'core/NexProvider/color-functions/darken/darken',
  'core/NexProvider/color-functions/lighten/lighten',
  'core/NexProvider/color-functions/rgba/rgba',
  'core/NexProvider/color-functions/to-rgba/to-rgba',
  'core/NexProvider/default-colors',
  'core/NexProvider/default-theme',
  'core/NexProvider/merge-mantine-theme/merge-mantine-theme',
  'core/NexProvider/MantineCssVariables/virtual-color/virtual-color',
  'core/NexProvider/color-functions/colors-tuple/colors-tuple',
  'theme-to-vars',
].reduce<string[]>((acc, name) => {
  acc.push(`${name}.js`, `${name}.mjs`, `${name}.cjs`);
  return acc;
}, []);
