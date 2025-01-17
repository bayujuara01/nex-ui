import { UnstyledButton } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { UnstyledButton } from '@nex-ui/core';

function Demo() {
  return <UnstyledButton>Button without styles</UnstyledButton>;
}
`;

function Demo() {
  return <UnstyledButton>Button without styles</UnstyledButton>;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
