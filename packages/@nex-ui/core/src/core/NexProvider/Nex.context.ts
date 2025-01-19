import { createContext, useContext } from 'react';
import { ConvertCSSVariablesInput } from './convert-css-variables';
import type { MantineColorScheme, NexTheme } from './theme.types';

export interface MantineStylesTransform {
  sx?: () => (sx: any) => string;
  styles?: () => (styles: any, payload: any) => Record<string, string>;
}

interface NexContextValue {
  colorScheme: MantineColorScheme;
  setColorScheme: (colorScheme: MantineColorScheme) => void;
  clearColorScheme: () => void;
  getRootElement: () => HTMLElement | undefined;
  classNamesPrefix: string;
  getStyleNonce?: () => string | undefined;
  cssVariablesResolver?: (theme: NexTheme) => ConvertCSSVariablesInput;
  cssVariablesSelector: string;
  withStaticClasses: boolean;
  headless?: boolean;
  stylesTransform?: MantineStylesTransform;
}

export const NexContext = createContext<NexContextValue | null>(null);

export function useNexContext() {
  const ctx = useContext(NexContext);

  if (!ctx) {
    throw new Error('[@mantine/core] MantineProvider was not found in tree');
  }

  return ctx;
}

export function useMantineCssVariablesResolver() {
  return useNexContext().cssVariablesResolver;
}

export function useMantineClassNamesPrefix() {
  return useNexContext().classNamesPrefix;
}

export function useMantineStyleNonce() {
  return useNexContext().getStyleNonce;
}

export function useMantineWithStaticClasses() {
  return useNexContext().withStaticClasses;
}

export function useMantineIsHeadless() {
  return useNexContext().headless;
}

export function useMantineSxTransform() {
  return useNexContext().stylesTransform?.sx;
}

export function useMantineStylesTransform() {
  return useNexContext().stylesTransform?.styles;
}
