import { PinInput } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { PinInput } from '@nex-ui/core';

function Demo() {
  return <PinInput type={/^[0-3]*$/} inputType="tel" inputMode="numeric" />;
}
`;

function Demo() {
  return <PinInput type={/^[0-3]*$/} inputType="tel" inputMode="numeric" />;
}

export const regexp: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
