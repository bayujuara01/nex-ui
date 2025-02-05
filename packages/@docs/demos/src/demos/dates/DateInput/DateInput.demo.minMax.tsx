import dayjs from 'dayjs';
import { DateInput } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import dayjs from 'dayjs';
import { DateInput } from '@nex-ui/dates';

function Demo() {
  return (
    <DateInput
      minDate={new Date()}
      maxDate={dayjs(new Date()).add(1, 'month').toDate()}
      label="Date input"
      placeholder="Date input"
    />
  );
}
`;

function Demo() {
  return (
    <DateInput
      minDate={new Date()}
      maxDate={dayjs(new Date()).add(1, 'month').toDate()}
      label="Date input"
      placeholder="Date input"
    />
  );
}

export const minMax: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
