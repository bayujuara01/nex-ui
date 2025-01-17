import { Container, createTheme, NexThemeProvider, rem } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Container, NexProvider, createTheme, rem } from '@nex-ui/core';

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(300),
  xs: rem(400),
  sm: rem(500),
  md: rem(600),
  lg: rem(700),
  xl: rem(800),
  xxl: rem(900),
};

const theme = createTheme({
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
            ? CONTAINER_SIZES[size]
            : rem(size),
        },
      }),
    }),
  },
});

function Demo() {
  return (
    <NexProvider theme={theme}>
      <Container size="xxs" bg="var(--mantine-color-blue-light)">
        Container with custom size
      </Container>
    </NexProvider>
  );
}

`;

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(300),
  xs: rem(400),
  sm: rem(500),
  md: rem(600),
  lg: rem(700),
  xl: rem(800),
  xxl: rem(900),
};

const theme = createTheme({
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
  },
});

function Demo() {
  return (
    <NexThemeProvider theme={theme}>
      <Container size="xxs" bg="var(--mantine-color-blue-light)">
        Container with custom size
      </Container>
    </NexThemeProvider>
  );
}

export const sizes: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
