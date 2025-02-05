import { Highlight } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Highlight } from '@nex-ui/core';

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://mantine.dev"
      target="_blank"
      highlight="mantine"
      fw={500}
      c="var(--mantine-color-anchor)"
    >
      Mantine website
    </Highlight>
  );
}

`;

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://mantine.dev"
      target="_blank"
      highlight="mantine"
      fw={500}
      c="var(--mantine-color-anchor)"
    >
      Mantine website
    </Highlight>
  );
}

export const props: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
