import { TimeInput } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { TimeInput } from '@nex-ui/dates';

function Demo() {
  return <TimeInput withSeconds />;
}
`;

function Demo() {
  return <TimeInput withSeconds />;
}

export const withSeconds: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 340,
  component: Demo,
  code,
};
