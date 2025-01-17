import { useEffect, useState } from 'react';
import { Button, Stack, Text } from '@nex-ui/core';
import { useInterval } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useState, useEffect } from 'react';
import { useInterval } from '@nex-ui/hooks';
import { Stack, Button, Text } from '@nex-ui/core';

function Demo() {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return (
    <Stack align="center">
      <Text>Page loaded <b>{seconds}</b> seconds ago</Text>
      <Button onClick={interval.toggle} color={interval.active ? 'red' : 'teal'}>
        {interval.active ? 'Stop' : 'Start'} counting
      </Button>
    </Stack>
  );
}
`;

function Demo() {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return (
    <Stack align="center">
      <Text>
        Page loaded <b>{seconds}</b> seconds ago
      </Text>
      <Button onClick={interval.toggle} color={interval.active ? 'red' : 'teal'}>
        {interval.active ? 'Stop' : 'Start'} counting
      </Button>
    </Stack>
  );
}

export const useIntervalDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
