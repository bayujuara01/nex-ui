import { createTheme, Loader, NexThemeProvider } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import { CssLoader, cssLoaderModuleCssCode, cssLoaderTsxCode } from './_CssLoader';

const code = `
import { NexProvider, Loader } from '@nex-ui/core';
import { CssLoader } from './CssLoader';

const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, custom: CssLoader },
        type: 'custom',
      },
    }),
  },
});

function Demo() {
  return (
    <NexThemeProvider theme={theme}>
      <Loader />
    </NexThemeProvider>
  );
}
`;

const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, custom: CssLoader },
        type: 'custom',
      },
    }),
  },
});

function Demo() {
  return (
    <NexThemeProvider theme={theme}>
      <Loader />
    </NexThemeProvider>
  );
}

export const cssLoader: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'CssLoader.tsx', language: 'tsx', code: cssLoaderTsxCode },
    { fileName: 'CssLoader.module.css', language: 'scss', code: cssLoaderModuleCssCode },
  ],
};
