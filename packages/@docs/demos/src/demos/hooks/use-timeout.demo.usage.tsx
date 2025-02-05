import { useState } from 'react';
import { Button, Group, Text } from '@nex-ui/core';
import { randomId, useTimeout } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useState } from 'react';
import { Button, Text, Group } from '@nex-ui/core';
import { randomId, useTimeout } from '@nex-ui/hooks';

function Demo() {
  const [value, setValue] = useState('');
  const { start, clear } = useTimeout(() => setValue(randomId()), 1000);

  return (
    <Group>
      <Button onClick={start}>Start</Button>
      <Button onClick={clear} color="red">
        Clear
      </Button>
      <Text>Random value: {value}</Text>
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState('');
  const { start, clear } = useTimeout(() => setValue(randomId()), 1000);

  return (
    <Group>
      <Button onClick={start}>Start</Button>
      <Button onClick={clear} color="red">
        Clear
      </Button>
      <Text>Random value: {value}</Text>
    </Group>
  );
}

export const useTimeoutDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
