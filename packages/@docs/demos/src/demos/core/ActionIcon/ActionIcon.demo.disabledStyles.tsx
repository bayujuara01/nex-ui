import { IconHeart } from '@tabler/icons-react';
import { ActionIcon } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import classes from './ActionIcon.demo.disabledStyles.module.css';

const code = `
import { ActionIcon } from '@nex-ui/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ActionIcon size="xl" className={classes.button} disabled aria-label="Disabled with styles">
      <IconHeart />
    </ActionIcon>
  );
}
`;

const cssCode = `
.button {
  &:disabled,
  &[data-disabled] {
    border-color: light-dark(var(--nex-color-gray-3), var(--nex-color-dark-4));
    background-color: transparent;
  }
}
`;

function Demo() {
  return (
    <ActionIcon size="xl" className={classes.button} disabled aria-label="Disabled with styles">
      <IconHeart />
    </ActionIcon>
  );
}

export const disabledStyles: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code: [
    { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
    { fileName: 'Demo.tsx', code, language: 'tsx' },
  ],
};
