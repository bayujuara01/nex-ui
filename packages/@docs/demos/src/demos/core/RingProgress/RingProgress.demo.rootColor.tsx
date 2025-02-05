import { RingProgress } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { RingProgress } from '@nex-ui/core';

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />;
}
`;

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />;
}

export const rootColor: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
