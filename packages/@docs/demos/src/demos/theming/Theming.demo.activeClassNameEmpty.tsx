import { Button, NexThemeProvider } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { NexProvider, Button } from '@nex-ui/core';

function Demo() {
  return (
    <NexProvider theme={{ activeClassName: '' }}>
      <Button>No active styles</Button>
    </NexProvider>
  );
}
`;

function Demo() {
  return (
    <NexThemeProvider theme={{ activeClassName: '' }}>
      <Button>No active styles</Button>
    </NexThemeProvider>
  );
}

export const activeClassNameEmpty: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
