import { useState } from 'react';
import { HueSlider, Text } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useState } from 'react';
import { HueSlider, Text } from '@nex-ui/core';

function Demo() {
  const [value, onChange] = useState(250);

  return (
    <>
      <Text>Hue value: {value}</Text>
      <HueSlider value={value} onChange={onChange} />
    </>
  );
}
`;

function Demo() {
  const [value, onChange] = useState(250);

  return (
    <>
      <Text>Hue value: {value}</Text>
      <HueSlider value={value} onChange={onChange} />
    </>
  );
}

export const hueSlider: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 300,
};
