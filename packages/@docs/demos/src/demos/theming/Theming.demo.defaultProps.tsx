import { Button, createTheme, Group, NexThemeProvider } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { NexProvider, Button, Group, createTheme } from '@nex-ui/core';

const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        color: 'cyan',
        variant: 'outline',
      },
    }),
  },
});

function Demo() {
  return (
    <NexProvider theme={theme}>
      <Group>
        <Button>Default button</Button>
        <Button color="red" variant="filled">
          Button with props
        </Button>
      </Group>
    </NexProvider>
  );
}
`;

const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        color: 'cyan',
        variant: 'outline',
      },
    }),
  },
});

function Demo() {
  return (
    <NexThemeProvider theme={theme}>
      <Group>
        <Button>Default button</Button>
        <Button color="red" variant="filled">
          Button with props
        </Button>
      </Group>
    </NexThemeProvider>
  );
}

export const defaultProps: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
