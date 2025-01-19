import './global.css';

import { localStorageColorSchemeManager, MantineColorSchemeManager } from './color-scheme-managers';
import { NexContext, MantineStylesTransform } from './Nex.context';
import { MantineClasses } from './MantineClasses';
import { CSSVariablesResolver, MantineCssVariables } from './MantineCssVariables';
import { NexThemeProvider } from './NexThemeProvider';
import { suppressNextjsWarning } from './suppress-nextjs-warning';
import type { MantineColorScheme, MantineThemeOverride } from './theme.types';
import { useProviderColorScheme } from './use-mantine-color-scheme';
import { useRespectReduceMotion } from './use-respect-reduce-motion';

suppressNextjsWarning();

export interface NexProviderProps {
  /** Theme override object */
  theme?: MantineThemeOverride;

  /** Used to retrieve/set color scheme value in external storage, by default uses `window.localStorage` */
  colorSchemeManager?: MantineColorSchemeManager;

  /** Default color scheme value used when `colorSchemeManager` cannot retrieve value from external storage, `light` by default */
  defaultColorScheme?: MantineColorScheme;

  /** Forces color scheme value, if set, MantineProvider ignores `colorSchemeManager` and `defaultColorScheme` */
  forceColorScheme?: 'light' | 'dark';

  /** CSS selector to which CSS variables should be added, `:root` by default */
  cssVariablesSelector?: string;

  /** Determines whether theme CSS variables should be added to given `cssVariablesSelector`, `true` by default */
  withCssVariables?: boolean;

  /** Determines whether CSS variables should be deduplicated: if CSS variable has the same value as in default theme, it is not added in the runtime. `true` by default. */
  deduplicateCssVariables?: boolean;

  /** Function to resolve root element to set `data-mantine-color-scheme` attribute, must return undefined on server, `() => document.documentElement` by default */
  getRootElement?: () => HTMLElement | undefined;

  /** A prefix for components static classes (for example {selector}-Text-root), `mantine` by default */
  classNamesPrefix?: string;

  /** Function to generate nonce attribute added to all generated `<style />` tags */
  getStyleNonce?: () => string;

  /** Function to generate CSS variables based on theme object */
  cssVariablesResolver?: CSSVariablesResolver;

  /** Determines whether components should have static classes, for example, `mantine-Button-root`. `true` by default */
  withStaticClasses?: boolean;

  /** Determines whether global classes should be added with `<style />` tag. Global classes are required for `hiddenFrom`/`visibleFrom` and `lightHidden`/`darkHidden` props to work. `true` by default. */
  withGlobalClasses?: boolean;

  /** An object to transform `styles` and `sx` props into css classes, can be used with CSS-in-JS libraries */
  stylesTransform?: MantineStylesTransform;

  /** Your application */
  children?: React.ReactNode;
}

export function NexProvider({
  theme,
  children,
  getStyleNonce,
  withStaticClasses = true,
  withGlobalClasses = true,
  deduplicateCssVariables = true,
  withCssVariables = true,
  cssVariablesSelector = ':root',
  classNamesPrefix = 'nex',
  colorSchemeManager = localStorageColorSchemeManager(),
  defaultColorScheme = 'light',
  getRootElement = () => document.documentElement,
  cssVariablesResolver,
  forceColorScheme,
  stylesTransform,
}: NexProviderProps) {
  const { colorScheme, setColorScheme, clearColorScheme } = useProviderColorScheme({
    defaultColorScheme,
    forceColorScheme,
    manager: colorSchemeManager,
    getRootElement,
  });

  useRespectReduceMotion({
    respectReducedMotion: theme?.respectReducedMotion || false,
    getRootElement,
  });

  return (
    <NexContext.Provider
      value={{
        colorScheme,
        setColorScheme,
        clearColorScheme,
        getRootElement,
        classNamesPrefix,
        getStyleNonce,
        cssVariablesResolver,
        cssVariablesSelector,
        withStaticClasses,
        stylesTransform,
      }}
    >
      <NexThemeProvider theme={theme}>
        {withCssVariables && (
          <MantineCssVariables
            cssVariablesSelector={cssVariablesSelector}
            deduplicateCssVariables={deduplicateCssVariables}
          />
        )}
        {withGlobalClasses && <MantineClasses />}
        {children}
      </NexThemeProvider>
    </NexContext.Provider>
  );
}

NexProvider.displayName = '@mantine/core/MantineProvider';

export interface HeadlessMantineProviderProps {
  /** Theme override object */
  theme?: MantineThemeOverride;

  /** Your application */
  children?: React.ReactNode;
}

export function HeadlessMantineProvider({ children, theme }: HeadlessMantineProviderProps) {
  return (
    <NexContext.Provider
      value={{
        colorScheme: 'auto',
        setColorScheme: () => {},
        clearColorScheme: () => {},
        getRootElement: () => document.documentElement,
        classNamesPrefix: 'nex',
        cssVariablesSelector: ':root',
        withStaticClasses: false,
        headless: true,
      }}
    >
      <NexThemeProvider theme={theme}>{children}</NexThemeProvider>
    </NexContext.Provider>
  );
}

HeadlessMantineProvider.displayName = '@mantine/core/HeadlessMantineProvider';
