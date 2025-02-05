import { Badge } from '@nex-ui/core';
import { useIdle } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const initialStateCode = `
import { Badge } from '@nex-ui/core';
import { useIdle } from '@nex-ui/hooks';

function Demo() {
  const idle = useIdle(2000, { initialState: false });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function Demo() {
  const idle = useIdle(2000, { initialState: false });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}

export const useIdleInitialState: MantineDemo = {
  type: 'code',
  code: initialStateCode,
  component: Demo,
  centered: true,
};
