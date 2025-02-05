import { DatesProvider, DateTimePicker } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { DatesProvider, DateTimePicker } from '@nex-ui/dates';

function Demo() {
  return (
    <DatesProvider settings={{ timezone: 'America/New_York' }}>
      <DateTimePicker label="Pick a Date" placeholder="Pick a Date" defaultValue={new Date('2000-10-03 02:10:00Z')} />
    </DatesProvider>
  );
}
`;

function Demo() {
  return (
    <DatesProvider settings={{ timezone: 'America/New_York' }}>
      <DateTimePicker
        label="Pick a Date"
        placeholder="Pick a Date"
        defaultValue={new Date('2000-10-03 02:10:00Z')}
      />
    </DatesProvider>
  );
}

export const timezone: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
