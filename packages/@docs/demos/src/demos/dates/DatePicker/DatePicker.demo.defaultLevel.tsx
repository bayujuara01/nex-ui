import { Group } from '@nex-ui/core';
import { DatePicker } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Group } from '@nex-ui/core';
import { DatePicker } from '@nex-ui/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker defaultLevel="decade" />
      <DatePicker defaultLevel="year" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <DatePicker defaultLevel="decade" />
      <DatePicker defaultLevel="year" />
    </Group>
  );
}

export const defaultLevel: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
