import { NumberInput } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { NumberInput } from '@nex-ui/core';

function Demo() {
  return (
    <NumberInput
      label="Always show 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
      fixedDecimalScale
      defaultValue={2.2}
    />
  );
}
`;

function Demo() {
  return (
    <NumberInput
      label="Always show 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
      fixedDecimalScale
      defaultValue={2.2}
    />
  );
}

export const fixedDecimalScale: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
