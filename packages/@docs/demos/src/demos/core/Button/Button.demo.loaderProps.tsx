import { Button } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Button } from '@nex-ui/core';

function Demo() {
  return (
    <Button loading loaderProps={{ type: 'dots' }}>
      Loading button
    </Button>
  );
}
`;

function Demo() {
  return (
    <Button loading loaderProps={{ type: 'dots' }}>
      Loading button
    </Button>
  );
}

export const loaderProps: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
