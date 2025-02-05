import { Group, Radio } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Radio, Group } from '@nex-ui/core';

function Demo() {
  return (
    <Group>
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" />
      <Radio disabled label="Svelte" value="sv" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" />
      <Radio disabled label="Svelte" value="sv" />
    </Group>
  );
}

export const disabled: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
