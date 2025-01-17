import { Badge } from '@nex-ui/core';
import { useIdle } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const eventsCode = `
import { Badge } from '@nex-ui/core';
import { useIdle } from '@nex-ui/hooks';

function Demo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function Demo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}

export const useIdleEvents: MantineDemo = {
  type: 'code',
  code: eventsCode,
  component: Demo,
  centered: true,
};
