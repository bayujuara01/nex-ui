import { MonthPicker } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { MonthPicker } from '@nex-ui/dates';

function Demo() {
  return <MonthPicker maxLevel="year" />;
}
`;

function Demo() {
  return <MonthPicker maxLevel="year" />;
}

export const maxLevel: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
