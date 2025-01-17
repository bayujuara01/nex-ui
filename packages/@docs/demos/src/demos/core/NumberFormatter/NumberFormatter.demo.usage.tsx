import { NumberFormatter } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { NumberFormatter } from '@nex-ui/core';

function Demo() {
  return <NumberFormatter prefix="$ " value={1000000} thousandSeparator />;
}
`;

function Demo() {
  return <NumberFormatter prefix="$ " value={1000000} thousandSeparator />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
