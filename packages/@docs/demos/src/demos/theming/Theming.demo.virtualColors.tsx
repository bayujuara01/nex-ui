import { Box } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Box } from '@nex-ui/core';

export function Demo() {
  return (
    <Box bg="primary" c="white" p="md" fw={700}>
      This box has virtual background color,
      it is pink in dark mode and cyan in light mode
    </Box>
  );
}
`;

const appCode = `
import { createTheme, NexProvider, virtualColor } from '@nex-ui/core';
import { Demo } from './Demo';

const theme = createTheme({
  colors: {
    primary: virtualColor({
      name: 'primary',
      dark: 'pink',
      light: 'cyan',
    }),
  },
});

function App() {
  return (
    <NexProvider theme={theme}>
      <Demo />
    </NexProvider>
  );
}
`;

function Demo() {
  return (
    <Box bg="virtual" c="white" p="md" fw={700}>
      This box has virtual background color, it is pink in dark mode and cyan in light mode
    </Box>
  );
}

export const virtualColors: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'App.tsx', code: appCode, language: 'tsx' },
    { fileName: 'Demo.tsx', code, language: 'tsx' },
  ],
};
