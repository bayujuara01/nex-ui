import { DatePicker } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { DatePicker } from '@nex-ui/dates';

function Demo() {
  return <DatePicker withWeekNumbers />;
}
`;

function Demo() {
  return <DatePicker withWeekNumbers />;
}

export const withWeekNumbers: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
