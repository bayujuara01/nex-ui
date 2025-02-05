import { Text, TextInput } from '@nex-ui/core';
import { useInputState, usePrevious } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { TextInput, Text } from '@nex-ui/core';
import { usePrevious, useInputState } from '@nex-ui/hooks';

function Demo() {
  const [value, setValue] = useInputState('');
  const previousValue = usePrevious(value);

  return (
    <div>
      <TextInput
        label="Enter some text here"
        placeholder="Enter some text here"
        id="previous-demo-input"
        value={value}
        onChange={setValue}
      />
      <Text mt="md">Current value: {value}</Text>
      <Text>Previous value: {previousValue}</Text>
    </div>
  );
}
`;

function Demo() {
  const [value, setValue] = useInputState('');
  const previousValue = usePrevious(value);

  return (
    <div>
      <TextInput
        label="Enter some text here"
        placeholder="Enter some text here"
        id="previous-demo-input"
        value={value}
        onChange={setValue}
      />
      <Text mt="md">Current value: {value}</Text>
      <Text>Previous value: {previousValue}</Text>
    </div>
  );
}

export const usePreviousUsage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
