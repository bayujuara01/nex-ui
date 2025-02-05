import { AspectRatio } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { AspectRatio } from '@nex-ui/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube.com/embed/Tn6-PIqc4UM"
        title="React in 100 Seconds"
        style={{ border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  );
}
`;

function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube.com/embed/Tn6-PIqc4UM"
        title="React in 100 Seconds"
        style={{ border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  );
}

export const video: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
