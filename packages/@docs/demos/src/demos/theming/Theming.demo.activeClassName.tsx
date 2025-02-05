import { Button, NexThemeProvider } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import classes from './Theming.demo.activeClassName.module.css';

const tsxCode = `
import { NexProvider, Button } from '@nex-ui/core';
import classes from './active.module.css';

function Demo() {
  return (
    <NexProvider theme={{ activeClassName: classes.active }}>
      <Button>Press me to see active styles</Button>
    </NexProvider>
  );
}
`;

const cssCode = `
.active {
  transition: transform 50ms ease-in-out;

  &:active {
    transform: scale(0.97);
  }
}
`;

function Demo() {
  return (
    <NexThemeProvider theme={{ activeClassName: classes.active }}>
      <Button>Press me to see active styles</Button>
    </NexThemeProvider>
  );
}

export const activeClassName: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code: tsxCode },
    { fileName: 'active.module.css', language: 'scss', code: cssCode },
  ],
};
