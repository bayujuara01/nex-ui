import { Image } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Image } from '@nex-ui/core';

function Demo() {
  return (
    <Image
      radius="md"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
    />
  );
}
`;

function Demo() {
  return (
    <Image
      radius="md"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
    />
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
