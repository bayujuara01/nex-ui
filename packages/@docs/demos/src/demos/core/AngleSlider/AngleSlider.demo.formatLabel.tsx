import { AngleSlider } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { AngleSlider } from '@nex-ui/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" formatLabel={(value) => \`\${value}°\`} />;
}
`;

function Demo() {
  return <AngleSlider aria-label="Angle slider" formatLabel={(value) => `${value}°`} />;
}

export const formatLabel: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
