import { Image } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Image } from '@nex-ui/core';

function Demo() {
  return (
    <Image
      radius="md"
      src={null}
      h={200}
      fallbackSrc="https://placehold.co/600x400?text=Placeholder"
    />
  );
}
`;

function Demo() {
  return (
    <Image
      radius="md"
      src={null}
      h={200}
      fallbackSrc="https://placehold.co/600x400?text=Placeholder"
    />
  );
}

export const fallback: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
