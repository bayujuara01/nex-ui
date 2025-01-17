import dayjs from 'dayjs';
import { DateInput, DateInputProps } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import dayjs from 'dayjs';
import { DateInput, DateInputProps } from '@nex-ui/dates';

const dateParser: DateInputProps['dateParser'] = (input) => {
  if (input === 'WW2') {
    return new Date(1939, 8, 1);
  }

  return dayjs(input, 'DD/MM/YYYY').toDate();
};

function Demo() {
  return (
    <DateInput
      dateParser={dateParser}
      valueFormat="DD/MM/YYYY"
      label="Type WW2"
      placeholder="Type WW2"
    />
  );
}
`;

const dateParser: DateInputProps['dateParser'] = (input) => {
  if (input === 'WW2') {
    return new Date(1939, 8, 1);
  }

  return dayjs(input, 'DD/MM/YYYY').toDate();
};

function Demo() {
  return (
    <DateInput
      dateParser={dateParser}
      valueFormat="DD/MM/YYYY"
      label="Type WW2"
      placeholder="Type WW2"
    />
  );
}

export const parser: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
