import { Slider } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Slider } from '@nex-ui/core';

function Demo() {
  return (
    <Slider
      restrictToMarks
      defaultValue={25}
      marks={Array.from({ length: 5 }).map((_, index) => ({ value: index * 25 }))}
    />
  );
}
`;

function Demo() {
  return (
    <Slider
      restrictToMarks
      defaultValue={25}
      marks={Array.from({ length: 5 }).map((_, index) => ({ value: index * 25 }))}
    />
  );
}

export const restrictToMarks: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 400,
};
