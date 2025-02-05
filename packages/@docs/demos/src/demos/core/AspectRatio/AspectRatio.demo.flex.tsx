import { AspectRatio, Image, rem } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { AspectRatio, Image, rem } from '@nex-ui/core';

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <AspectRatio ratio={1} style={{ flex: \`0 0 \${rem(100)}\` }}>
        <Image
          src="https://picsum.photos/200"
          alt="Lorem Picsum"
        />
      </AspectRatio>
    </div>
  );
}
`;

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <AspectRatio ratio={1} style={{ flex: `0 0 ${rem(100)}` }}>
        <Image
          src="https://picsum.photos/200"
          alt="Lorem Picsum"
        />
      </AspectRatio>
    </div>
  );
}

export const flex: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
