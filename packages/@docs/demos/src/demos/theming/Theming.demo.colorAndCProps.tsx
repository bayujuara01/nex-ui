import { Button } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Button } from '@nex-ui/core';

function Demo() {
  return (
    <Button color="#C3FF36" c="black">
      Button with color and c props
    </Button>
  );
}
`;

function Demo() {
  return (
    <Button color="#C3FF36" c="black">
      Button with color and c props
    </Button>
  );
}

export const colorAndCProps: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
