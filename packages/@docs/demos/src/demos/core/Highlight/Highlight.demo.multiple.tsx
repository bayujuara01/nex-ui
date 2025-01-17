import { Highlight } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Highlight } from '@nex-ui/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
`;

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}

export const multiple: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
