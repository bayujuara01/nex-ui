import { DateInput } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { DateInput } from '@nex-ui/dates';

function Demo() {
  return <DateInput allowDeselect label="Date input" placeholder="Date input" />;
}
`;

function Demo() {
  return <DateInput allowDeselect label="Date input" placeholder="Date input" />;
}

export const deselect: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
