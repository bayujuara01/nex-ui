import { FileInput } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { FileInput } from '@nex-ui/core';

function Demo() {
  return <FileInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`;

function Demo() {
  return <FileInput disabled label="Disabled input" placeholder="Disabled input" />;
}

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
