import { IconHeart } from '@tabler/icons-react';
import { ActionIcon, createTheme, Group, NexThemeProvider } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import classes from './ActionIcon.demo.customVariant.module.css';

const code = `
import { Group, ActionIcon, NexProvider, createTheme } from '@nex-ui/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <NexProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xl" variant="danger" aria-label="Danger variant">
          <IconHeart />
        </ActionIcon>
        <ActionIcon size="xl" variant="primary" aria-label="Primary variant">
          <IconHeart />
        </ActionIcon>
      </Group>
    </NexProvider>
  );
}
`;

const cssCode = `
.root {
  &[data-variant='danger'] {
    background-color: var(--nex-color-red-9);
    color: var(--nex-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--nex-color-white);
  }
}
`;

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <NexThemeProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xl" variant="danger" aria-label="Danger variant">
          <IconHeart />
        </ActionIcon>
        <ActionIcon size="xl" variant="primary" aria-label="Primary variant">
          <IconHeart />
        </ActionIcon>
      </Group>
    </NexThemeProvider>
  );
}

export const customVariant: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
  ],
};
