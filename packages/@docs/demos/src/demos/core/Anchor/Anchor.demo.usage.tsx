import { Anchor } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Anchor } from '@nex-ui/core';

function Demo() {
  return (
    <Anchor href="https://mantine.dev/" target="_blank">
      Anchor component
    </Anchor>
  );
}
`;

function Demo() {
  return (
    <Anchor href="https://mantine.dev/" target="_blank">
      Anchor component
    </Anchor>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
