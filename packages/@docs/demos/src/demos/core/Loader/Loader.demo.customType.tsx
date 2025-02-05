import { createTheme, Loader, NexThemeProvider } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import { RingLoader, ringLoaderCode } from './_RingLoader';

const code = `
import { NexProvider, Loader } from '@nex-ui/core';
import { RingLoader } from './RingLoader';

const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, ring: RingLoader },
        type: 'ring',
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
        loaders: { ...Loader.defaultLoaders, ring: RingLoader },
        type: 'ring',
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

export const customType: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'RingLoader.tsx', language: 'tsx', code: ringLoaderCode },
  ],
};
