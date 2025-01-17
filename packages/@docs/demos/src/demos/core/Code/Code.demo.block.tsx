import { Code } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Code } from '@nex-ui/core';

const codeForPreviousDemo = \`
import { Code } from '@nex-ui/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}\`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}
`;

const codeForPreviousDemo = `
import { Code } from '@nex-ui/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}

export const block: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
