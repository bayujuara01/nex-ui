import { SemiCircleProgress } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { SemiCircleProgress } from '@nex-ui/core';

function Demo() {
  return <SemiCircleProgress value={30} emptySegmentColor="var(--mantine-color-dimmed)" />;
}
`;

function Demo() {
  return <SemiCircleProgress value={30} emptySegmentColor="var(--mantine-color-dimmed)" />;
}

export const emptySegmentColor: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
