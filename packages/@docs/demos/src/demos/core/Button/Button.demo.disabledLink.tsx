import { Button } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Button } from '@nex-ui/core';

function Demo() {
  return (
    <Button
      component="a"
      href="https://mantine.dev"
      data-disabled
      onClick={(event) => event.preventDefault()}
    >
      Disabled link
    </Button>
  );
}
`;

function Demo() {
  return (
    <Button
      component="a"
      href="https://mantine.dev"
      data-disabled
      onClick={(event) => event.preventDefault()}
    >
      Disabled link
    </Button>
  );
}

export const disabledLink: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
