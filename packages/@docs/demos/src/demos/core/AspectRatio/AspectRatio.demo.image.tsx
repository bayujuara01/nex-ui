import { AspectRatio } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { AspectRatio } from '@nex-ui/core';

function Demo() {
  return (
    <AspectRatio ratio={1080 / 720} maw={300} mx="auto">
      <img
        src="https://picsum.photos/300/200"
        alt="Mountain"
      />
    </AspectRatio>
  );
}
`;

function Demo() {
  return (
    <AspectRatio ratio={1080 / 720} maw={300} mx="auto">
      <img
        src="https://picsum.photos/300/200"
        alt="Mountain"
      />
    </AspectRatio>
  );
}

export const image: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
