import { DatePicker } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { DatePicker } from '@nex-ui/dates';

function Demo() {
  return <DatePicker monthsListFormat="MM" yearsListFormat="YY" />;
}
`;

function Demo() {
  return <DatePicker monthsListFormat="MM" yearsListFormat="YY" />;
}

export const listFormat: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
