import cx from 'clsx';
import { Container, createTheme, NexThemeProvider } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import classes from './Container.demo.responsive.module.css';

const code = `
import cx from 'clsx';
import { NexProvider, Container, createTheme } from '@nex-ui/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === 'responsive' }),
      }),
    }),
  },
});

function Demo() {
  return (
    <NexProvider theme={theme}>
      <Container size="responsive" bg="var(--nex-color-blue-light)">
        Container with responsive size
      </Container>
    </NexProvider>
  );
}
`;

const cssCode = `
.responsiveContainer {
  max-width: 300px;

  @media (min-width: em(400px)) {
    max-width: 400px;
  }

  @media (min-width: em(600px)) {
    max-width: 600px;
  }
}
`;

const theme = createTheme({
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === 'responsive' }),
      }),
    }),
  },
});

function Demo() {
  return (
    <NexThemeProvider theme={theme}>
      <Container size="responsive" bg="var(--nex-color-blue-light)">
        Container with responsive size
      </Container>
    </NexThemeProvider>
  );
}

export const responsive: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
  ],
};
