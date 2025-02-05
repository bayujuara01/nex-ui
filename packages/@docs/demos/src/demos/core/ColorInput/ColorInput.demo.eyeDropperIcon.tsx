import { IconFocus2 } from '@tabler/icons-react';
import { ColorInput, rem } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { ColorInput, rem } from '@nex-ui/core';
import { IconFocus2 } from '@tabler/icons-react';

function Demo() {
  return (
    <ColorInput
      eyeDropperIcon={<IconFocus2 style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="With custom eye dropper icon"
      placeholder="Pick color"
    />
  );
}
`;

function Demo() {
  return (
    <ColorInput
      eyeDropperIcon={<IconFocus2 style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="With custom eye dropper icon"
      placeholder="Pick color"
    />
  );
}

export const eyeDropperIcon: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
