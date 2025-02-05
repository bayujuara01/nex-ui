import { Image } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Image } from '@nex-ui/core';

function Demo() {
  return (
    <Image
      radius="md"
      h={200}
      w="auto"
      fit="contain"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
    />
  );
}
`;

function Demo() {
  return (
    <Image
      radius="md"
      h={200}
      w="auto"
      fit="contain"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
    />
  );
}

export const contain: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
