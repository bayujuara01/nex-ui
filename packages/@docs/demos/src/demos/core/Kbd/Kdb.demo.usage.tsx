import { Kbd } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Kbd } from '@nex-ui/core';

function Demo() {
  return (
    <div dir="ltr">
      <Kbd>⌘</Kbd> + <Kbd>Shift</Kbd> + <Kbd>M</Kbd>
    </div>
  );
}
`;

function Demo() {
  return (
    <div dir="ltr">
      <Kbd>⌘</Kbd> + <Kbd>Shift</Kbd> + <Kbd>M</Kbd>
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
