import { ColorInput } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { ColorInput } from '@nex-ui/core';

function Demo() {
  return <ColorInput fixOnBlur={false} label="Value is not fixed on blur" placeholder="May contain invalid value" />;
}
`;

function Demo() {
  return (
    <ColorInput
      fixOnBlur={false}
      label="Value is not fixed on blur"
      placeholder="May contain invalid value"
    />
  );
}

export const fixOnBlur: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
