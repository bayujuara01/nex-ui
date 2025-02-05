import { NumberFormatter } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { NumberFormatter } from '@nex-ui/core';

function Demo() {
  return <NumberFormatter value={5 / 3} decimalScale={2} />;
}
`;

function Demo() {
  return <NumberFormatter value={5 / 3} decimalScale={2} />;
}

export const decimalScale: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
