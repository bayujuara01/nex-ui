import { Indicator } from '@nex-ui/core';
import { Calendar } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Indicator } from '@nex-ui/core';
import { Calendar } from '@nex-ui/dates';

function Demo() {
  return (
    <Calendar
      static
      renderDay={(date) => {
        const day = date.getDate();
        return (
          <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
            <div>{day}</div>
          </Indicator>
        );
      }}
    />
  );
}
`;

function Demo() {
  return (
    <Calendar
      static
      renderDay={(date) => {
        const day = date.getDate();
        return (
          <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
            <div>{day}</div>
          </Indicator>
        );
      }}
    />
  );
}

export const isStatic: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
