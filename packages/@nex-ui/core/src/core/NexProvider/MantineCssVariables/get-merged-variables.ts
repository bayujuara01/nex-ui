import { deepMerge } from '../../utils';
import { ConvertCSSVariablesInput } from '../convert-css-variables';
import { NexTheme } from '../theme.types';
import { defaultCssVariablesResolver } from './default-css-variables-resolver';

interface GetMergedVariablesInput {
  theme: NexTheme;
  generator?: (theme: NexTheme) => ConvertCSSVariablesInput;
}

export function getMergedVariables({ theme, generator }: GetMergedVariablesInput) {
  const defaultResolver = defaultCssVariablesResolver(theme);
  const providerGenerator = generator?.(theme);
  return providerGenerator ? deepMerge(defaultResolver, providerGenerator) : defaultResolver;
}
