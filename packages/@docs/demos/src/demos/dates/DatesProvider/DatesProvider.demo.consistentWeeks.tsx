import { DatePicker, DatesProvider } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { DatePicker, DatesProvider } from '@nex-ui/dates';

function Demo() {
  return (
    <DatesProvider settings={{ consistentWeeks: true }}>
      <DatePicker />
    </DatesProvider>
  );
}
`;

function Demo() {
  return (
    <DatesProvider settings={{ consistentWeeks: true }}>
      <DatePicker />
    </DatesProvider>
  );
}

export const consistentWeeks: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
