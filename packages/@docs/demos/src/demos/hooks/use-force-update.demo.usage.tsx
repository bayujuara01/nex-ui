import { Button, Group, Text } from '@nex-ui/core';
import { randomId, useForceUpdate } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Button, Text, Group } from '@nex-ui/core';
import { useForceUpdate, randomId } from '@nex-ui/hooks';

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group justify="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}
`;

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group justify="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}

export const useForceUpdateDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
