import { Group, Radio } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Radio, Group } from '@nex-ui/core';

function Demo() {
  return (
    <Group>
      <Radio.Indicator />
      <Radio.Indicator checked />
      <Radio.Indicator disabled />
      <Radio.Indicator disabled checked />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Radio.Indicator />
      <Radio.Indicator checked />
      <Radio.Indicator disabled />
      <Radio.Indicator disabled checked />
    </Group>
  );
}

export const indicator: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
