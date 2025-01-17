import 'dayjs/locale/ru';

import { DatePicker } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import 'dayjs/locale/ru';
import { DatePicker } from '@nex-ui/dates';

function Demo() {
  return <DatePicker locale="ru" />;
}
`;

function Demo() {
  return <DatePicker locale="ru" />;
}

export const locale: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
