import { ColorInput } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { ColorInput } from '@nex-ui/core';

function Demo() {
  return (
    <>
      <ColorInput label="Boolean error" placeholder="Boolean error" error />
      <ColorInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <ColorInput label="Boolean error" placeholder="Boolean error" error />
      <ColorInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}

export const error: MantineDemo = {
  type: 'code',
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
