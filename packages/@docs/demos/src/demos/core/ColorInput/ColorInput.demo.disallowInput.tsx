import { ColorInput } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { ColorInput } from '@nex-ui/core';

function Demo() {
  return <ColorInput disallowInput />;
}
`;

function Demo() {
  return (
    <ColorInput
      maw={320}
      mx="auto"
      disallowInput
      placeholder="Pick color"
      label="Your favorite color"
    />
  );
}

export const disallowInput: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
