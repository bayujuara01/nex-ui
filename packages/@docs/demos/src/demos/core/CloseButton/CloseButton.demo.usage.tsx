import { CloseButton } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { CloseButton } from '@nex-ui/core';

function Demo() {
  return <CloseButton{{props}} />;
}
`;

function Wrapper(props: any) {
  return <CloseButton {...props} />;
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { prop: 'size', type: 'size', initialValue: 'md', libraryValue: 'md' },
    {
      prop: 'variant',
      type: 'segmented',
      data: ['transparent', 'subtle'],
      libraryValue: 'subtle',
      initialValue: 'subtle',
    },
  ],
};
