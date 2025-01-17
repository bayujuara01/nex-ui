import { DateTimePicker } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { DateTimePicker } from '@nex-ui/dates';

function Demo() {
  return <DateTimePicker label="Disabled" placeholder="Pick date and time" disabled />;
}
`;

function Demo() {
  return <DateTimePicker label="Disabled" placeholder="Pick date and time" disabled />;
}

export const disabled: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
