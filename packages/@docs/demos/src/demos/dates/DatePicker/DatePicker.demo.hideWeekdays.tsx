import { DatePicker } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { DatePicker } from '@nex-ui/dates';

function Demo() {
  return <DatePicker hideWeekdays />;
}
`;

function Demo() {
  return <DatePicker hideWeekdays />;
}

export const hideWeekdays: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
