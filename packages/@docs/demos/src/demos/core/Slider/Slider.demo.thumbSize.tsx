import { Slider } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

function Wrapper(props: any) {
  return <Slider {...props} defaultValue={20} />;
}

const code = `
import { Slider } from '@nex-ui/core';

function Demo() {
  return <Slider{{props}} defaultValue={20} />;
}
`;

export const thumbSize: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  maxWidth: 400,
  centered: true,
  controls: [
    { prop: 'thumbSize', type: 'number', min: 14, max: 32, initialValue: 14, libraryValue: null },
  ],
};
