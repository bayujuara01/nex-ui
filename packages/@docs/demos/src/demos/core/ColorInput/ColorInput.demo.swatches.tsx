import { ColorInput, DEFAULT_THEME } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { ColorInput } from '@nex-ui/core';

function Demo() {
  return (
    <ColorInput
      format="hex"
      swatches={[${Object.keys(DEFAULT_THEME.colors)
        .map((color) => `'${DEFAULT_THEME.colors[color][6]}'`)
        .join(', ')}]}
    />
  );
}
`;

function Demo() {
  return (
    <ColorInput
      maw={320}
      mx="auto"
      placeholder="Pick color"
      label="Your favorite color"
      swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
    />
  );
}

export const swatches: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
