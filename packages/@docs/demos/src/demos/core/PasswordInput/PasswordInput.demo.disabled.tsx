import { PasswordInput } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { PasswordInput } from '@nex-ui/core';

function Demo() {
  return (
    <PasswordInput disabled label="Disabled password input" placeholder="Disabled password input" />
  );
}
`;

function Demo() {
  return (
    <PasswordInput disabled label="Disabled password input" placeholder="Disabled password input" />
  );
}

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
