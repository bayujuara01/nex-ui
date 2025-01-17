import { Button } from '@nex-ui/core';
import { upperFirst, useToggle } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Button } from '@nex-ui/core';
import { useToggle } from '@nex-ui/hooks';

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <Button color={value} onClick={() => toggle()}>
      {value}
    </Button>
  );
}
`;

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <Button color={value} onClick={() => toggle()}>
      {upperFirst(value)}
    </Button>
  );
}

export const useToggleDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
