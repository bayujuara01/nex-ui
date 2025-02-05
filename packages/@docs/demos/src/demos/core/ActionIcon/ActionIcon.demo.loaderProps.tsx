import { ActionIcon } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { ActionIcon } from '@nex-ui/core';

function Demo() {
  return <ActionIcon size="xl" loading loaderProps={{ type: 'dots' }} />;
}
`;

function Demo() {
  return <ActionIcon size="xl" loading loaderProps={{ type: 'dots' }} />;
}

export const loaderProps: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
