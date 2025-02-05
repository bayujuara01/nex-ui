import { Button, createTheme, NexThemeProvider } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { NexProvider, createTheme, Button } from '@nex-ui/core';

const theme = createTheme({
  defaultGradient: {
    from: 'orange',
    to: 'red',
    deg: 45,
  },
});

function Demo() {
  return (
    <NexProvider theme={theme}>
      <Button variant="gradient">Button with custom default gradient</Button>
    </NexProvider>
  );
}
`;

const theme = createTheme({
  defaultGradient: {
    from: 'orange',
    to: 'red',
    deg: 45,
  },
});

function Demo() {
  return (
    <NexThemeProvider theme={theme}>
      <Button variant="gradient">Button with custom default gradient</Button>
    </NexThemeProvider>
  );
}

export const defaultGradient: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
