import { Group } from '@nex-ui/core';
import { DatePicker } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Group } from '@nex-ui/core';
import { DatePicker } from '@nex-ui/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker firstDayOfWeek={0} />
      <DatePicker firstDayOfWeek={6} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <DatePicker firstDayOfWeek={0} />
      <DatePicker firstDayOfWeek={6} />
    </Group>
  );
}

export const firstDayOfWeek: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
