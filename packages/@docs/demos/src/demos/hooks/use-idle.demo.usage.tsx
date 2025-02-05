import { Badge } from '@nex-ui/core';
import { useIdle } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Badge } from '@nex-ui/core';
import { useIdle } from '@nex-ui/hooks';

function Demo() {
  const idle = useIdle(2000);
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function Demo() {
  const idle = useIdle(2000);
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}

export const useIdleDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
