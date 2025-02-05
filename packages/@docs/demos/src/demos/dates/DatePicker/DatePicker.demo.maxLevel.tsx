import { Group } from '@nex-ui/core';
import { DatePicker } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Group } from '@nex-ui/core';
import { DatePicker } from '@nex-ui/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker maxLevel="year" />
      <DatePicker maxLevel="month" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <DatePicker maxLevel="year" />
      <DatePicker maxLevel="month" />
    </Group>
  );
}

export const maxLevel: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
