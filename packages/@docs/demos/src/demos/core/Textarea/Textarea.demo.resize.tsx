import { Textarea } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Textarea } from '@nex-ui/core';

function Demo() {
  return <Textarea resize="vertical" label="Disabled" placeholder="Your comment" />;
}
`;

function Demo() {
  return <Textarea resize="vertical" label="Disabled" placeholder="Your comment" />;
}

export const resize: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
};
