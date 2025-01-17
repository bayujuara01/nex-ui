import { Text, TextInput } from '@nex-ui/core';
import { useThrottledState } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Text, TextInput } from '@nex-ui/core';
import { useThrottledState } from '@nex-ui/hooks';

function Demo() {
  const [throttledValue, setThrottledValue] = useThrottledState('', 1000);

  return (
    <>
      <TextInput
        placeholder="Search"
        onChange={(event) => setThrottledValue(event.currentTarget.value)}
      />
      <Text>Throttled value: {throttledValue || '–'}</Text>
    </>
  );
}
`;

function Demo() {
  const [throttledValue, setThrottledValue] = useThrottledState('', 1000);

  return (
    <>
      <TextInput
        placeholder="Search"
        onChange={(event) => setThrottledValue(event.currentTarget.value)}
      />
      <Text>Throttled value: {throttledValue || '–'}</Text>
    </>
  );
}

export const useThrottledStateUsage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
