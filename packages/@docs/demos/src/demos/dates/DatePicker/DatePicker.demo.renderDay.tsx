import { Indicator } from '@nex-ui/core';
import { DatePicker, DatePickerProps } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Indicator } from '@nex-ui/core';
import { DatePicker, DatePickerProps } from '@nex-ui/dates';

const dayRenderer: DatePickerProps['renderDay'] = (date) => {
  const day = date.getDate();
  return (
    <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
      <div>{day}</div>
    </Indicator>
  );
};

function Demo() {
  return <DatePicker renderDay={dayRenderer} />;
}

`;

const dayRenderer: DatePickerProps['renderDay'] = (date) => {
  const day = date.getDate();
  return (
    <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
      <div>{day}</div>
    </Indicator>
  );
};

function Demo() {
  return <DatePicker renderDay={dayRenderer} />;
}

export const renderDay: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
