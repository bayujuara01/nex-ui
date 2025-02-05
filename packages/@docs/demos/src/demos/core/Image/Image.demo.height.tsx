import { Image } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Image } from '@nex-ui/core';

function Demo() {
  return (
    <Image
      radius="md"
      h={200}
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"
    />
  );
}
`;

function Demo() {
  return (
    <Image
      radius="md"
      h={200}
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"
    />
  );
}

export const height: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
