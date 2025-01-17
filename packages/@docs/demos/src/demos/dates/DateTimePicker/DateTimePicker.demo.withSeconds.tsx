import { DateTimePicker } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { DateTimePicker } from '@nex-ui/dates';

function Demo() {
  return <DateTimePicker withSeconds label="Pick date and time" placeholder="Pick date and time" />;
}
`;

function Demo() {
  return <DateTimePicker withSeconds label="Pick date and time" placeholder="Pick date and time" />;
}

export const withSeconds: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
