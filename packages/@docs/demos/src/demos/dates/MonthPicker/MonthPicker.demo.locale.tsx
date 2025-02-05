import 'dayjs/locale/ru';

import { MonthPicker } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import 'dayjs/locale/ru';
import { MonthPicker } from '@nex-ui/dates';

function Demo() {
  return <MonthPicker locale="ru" />;
}
`;

function Demo() {
  return <MonthPicker locale="ru" />;
}

export const locale: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
