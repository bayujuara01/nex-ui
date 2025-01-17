import { Textarea } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Textarea } from '@nex-ui/core';

function Demo() {
  return <Textarea label="Disabled" placeholder="Your comment" disabled />;
}
`;

function Demo() {
  return <Textarea label="Disabled" placeholder="Your comment" disabled />;
}

export const disabled: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
};
