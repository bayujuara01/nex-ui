import { TimeInput } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { TimeInput } from '@nex-ui/dates';

function Demo() {
  return <TimeInput disabled />;
}
`;

function Demo() {
  return <TimeInput disabled />;
}

export const disabled: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 340,
  component: Demo,
  code,
};
