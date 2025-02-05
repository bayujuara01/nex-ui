import { DatePicker } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { DatePicker } from '@nex-ui/dates';

function Demo() {
  return <DatePicker weekendDays={[1, 2]} />;
}
`;

function Demo() {
  return <DatePicker weekendDays={[1, 2]} />;
}

export const weekendDays: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
