import { DatePicker } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { DatePicker } from '@nex-ui/dates';

function Demo() {
  return <DatePicker excludeDate={(date) => date.getDay() !== 5} />;
}
`;

function Demo() {
  return <DatePicker excludeDate={(date) => date.getDay() !== 5} />;
}

export const excludeDate: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
