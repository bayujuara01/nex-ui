import { DateInput } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { DateInput } from '@nex-ui/dates';

function Demo() {
  return <DateInput label="Disabled" placeholder="Date input" disabled />;
}
`;

function Demo() {
  return <DateInput label="Disabled" placeholder="Date input" disabled />;
}

export const disabled: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
