import { Slider } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Slider } from '@nex-ui/core';

function Demo() {
  return <Slider min={0} max={1} step={0.0005} defaultValue={0.5535} />;
}
`;

function Demo() {
  return <Slider min={0} max={1} step={0.0005} defaultValue={0.5535} />;
}

export const decimal: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
