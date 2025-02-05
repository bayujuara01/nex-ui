import { ColorPicker } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { ColorPicker } from '@nex-ui/core';

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}
`;

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}

export const fullWidth: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
