import { useState } from 'react';
import { Text, TextInput } from '@nex-ui/core';
import { useThrottledValue } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Text, TextInput } from '@nex-ui/core';
import { useThrottledValue } from '@nex-ui/hooks';

function Demo() {
  const [value, setValue] = useState('');
  const throttledValue = useThrottledValue(value, 1000);

  return (
    <>
      <TextInput placeholder="Search" onChange={(event) => setValue(event.currentTarget.value)} />
      <Text>Throttled value: {throttledValue || '–'}</Text>
    </>
  );
}
`;

function Demo() {
  const [value, setValue] = useState('');
  const throttledValue = useThrottledValue(value, 1000);

  return (
    <>
      <TextInput placeholder="Search" onChange={(event) => setValue(event.currentTarget.value)} />
      <Text>Throttled value: {throttledValue || '–'}</Text>
    </>
  );
}

export const useThrottledValueUsage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
