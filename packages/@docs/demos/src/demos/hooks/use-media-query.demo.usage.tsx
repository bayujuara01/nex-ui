import { Badge, em } from '@nex-ui/core';
import { useMediaQuery } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Badge } from '@nex-ui/core';
import { useMediaQuery } from '@nex-ui/hooks';

function Demo() {
  const matches = useMediaQuery('(min-width: ${em(900)})');

  return (
    <Badge color={matches ? 'teal' : 'red'} variant="filled">
      Breakpoint {matches ? 'matches' : 'does not match'}
    </Badge>
  );
}`;

function Demo() {
  const matches = useMediaQuery(`(min-width: ${em(900)})`);

  return (
    <Badge color={matches ? 'teal' : 'red'} variant="filled">
      Breakpoint {matches ? 'matches' : 'does not match'}
    </Badge>
  );
}

export const useMediaQueryDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
