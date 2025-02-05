import { Button, em, Tooltip } from '@nex-ui/core';
import { useMediaQuery } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Tooltip, Button, em } from '@nex-ui/core';
import { useMediaQuery } from '@nex-ui/hooks';

function Demo() {
  const isMobile = useMediaQuery(\`(max-width: \${em(750)})\`);

  return (
    <Tooltip label={isMobile ? 'Mobile' : 'Desktop'}>
      <Button>Hover me</Button>
    </Tooltip>
  );
}
`;

function Demo() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <Tooltip label={isMobile ? 'Mobile' : 'Desktop'}>
      <Button>Hover me</Button>
    </Tooltip>
  );
}

export const useMediaQueryHook: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
