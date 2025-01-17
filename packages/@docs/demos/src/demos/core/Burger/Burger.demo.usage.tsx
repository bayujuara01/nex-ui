import { Burger } from '@nex-ui/core';
import { useDisclosure } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useDisclosure } from '@nex-ui/hooks';
import { Burger } from '@nex-ui/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure();
  return <Burger{{props}} opened={opened} onClick={toggle} aria-label="Toggle navigation" />;
}
`;

function Wrapper(props: any) {
  const [opened, { toggle }] = useDisclosure();
  return <Burger {...props} opened={opened} onClick={toggle} aria-label="Toggle navigation" />;
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [{ type: 'size', prop: 'size', initialValue: 'md', libraryValue: 'md' }],
};
