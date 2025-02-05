import { Divider } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Divider } from '@nex-ui/core';

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}

export const variants: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
