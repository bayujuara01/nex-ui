import { createContext, useContext, useMemo } from 'react';
import { DEFAULT_THEME } from '../default-theme';
import { mergeMantineTheme } from '../merge-mantine-theme';
import { NexTheme, MantineThemeOverride } from '../theme.types';

export const NexThemeContext = createContext<NexTheme | null>(null);

export const useSafeNexTheme = () => useContext(NexThemeContext) || DEFAULT_THEME;

export function useNexTheme() {
  const ctx = useContext(NexThemeContext);
  if (!ctx) {
    throw new Error(
      '@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app'
    );
  }

  return ctx;
}

export interface NexThemeProviderProps {
  /** Determines whether theme should be inherited from parent MantineProvider, `true` by default */
  inherit?: boolean;

  /** Theme override object */
  theme?: MantineThemeOverride;

  /** Your application or part of the application that requires different theme */
  children?: React.ReactNode;
}

export function NexThemeProvider({
  theme,
  children,
  inherit = true,
}: NexThemeProviderProps) {
  const parentTheme = useSafeNexTheme();
  const mergedTheme = useMemo(
    () => mergeMantineTheme(inherit ? parentTheme : DEFAULT_THEME, theme),
    [theme, parentTheme, inherit]
  );

  return (
    <NexThemeContext.Provider value={mergedTheme}>{children}</NexThemeContext.Provider>
  );
}

NexThemeProvider.displayName = '@mantine/core/MantineThemeProvider';
