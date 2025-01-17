import { Code } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Code } from '@nex-ui/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
`;

function Demo() {
  return <Code>React.createElement()</Code>;
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
