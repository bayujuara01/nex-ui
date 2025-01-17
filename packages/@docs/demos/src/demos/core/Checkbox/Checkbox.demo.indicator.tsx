import { Checkbox, Group } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Checkbox, Group } from '@nex-ui/core';

function Demo() {
  return (
    <Group>
      <Checkbox.Indicator />
      <Checkbox.Indicator checked />
      <Checkbox.Indicator indeterminate />
      <Checkbox.Indicator disabled />
      <Checkbox.Indicator disabled checked />
      <Checkbox.Indicator disabled indeterminate />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Checkbox.Indicator />
      <Checkbox.Indicator checked />
      <Checkbox.Indicator indeterminate />
      <Checkbox.Indicator disabled />
      <Checkbox.Indicator disabled checked />
      <Checkbox.Indicator disabled indeterminate />
    </Group>
  );
}

export const indicator: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
