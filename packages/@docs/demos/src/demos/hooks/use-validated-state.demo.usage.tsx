import { Box, Text, TextInput } from '@nex-ui/core';
import { useValidatedState } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { TextInput, Text, Box } from '@nex-ui/core';
import { useValidatedState } from '@nex-ui/hooks';

function Demo() {
  const [{ value, lastValidValue, valid }, setEmail] = useValidatedState(
    '',
    (val) => /^\\S+@\\S+$/.test(val),
    true
  );

  return (
    <Box maw={320} mx="auto" style={{ overflowWrap: 'break-word' }}>
      <TextInput
        value={value}
        onChange={(event) => setEmail(event.currentTarget.value)}
        withAsterisk
        error={!valid}
        placeholder="email@example.com"
        label="Your email"
      />

      <Text size="sm" mt="md">
        <Text inherit c="dimmed" component="span">
          Current value:
        </Text>{' '}
        {value || '[empty string]'}
      </Text>

      <Text size="sm">
        <Text inherit c="dimmed" component="span">
          Last valid value:
        </Text>{' '}
        {lastValidValue || '[empty string]'}
      </Text>
    </Box>
  );
}
`;

function Demo() {
  const [{ value, lastValidValue, valid }, setEmail] = useValidatedState(
    '',
    (val) => /^\S+@\S+$/.test(val),
    true
  );

  return (
    <Box maw={320} mx="auto" style={{ overflowWrap: 'break-word' }}>
      <TextInput
        value={value}
        onChange={(event) => setEmail(event.currentTarget.value)}
        withAsterisk
        error={!valid}
        placeholder="email@example.com"
        label="Your email"
      />

      <Text size="sm" mt="md">
        <Text inherit c="dimmed" component="span">
          Current value:
        </Text>{' '}
        {value || '[empty string]'}
      </Text>

      <Text size="sm">
        <Text inherit c="dimmed" component="span">
          Last valid value:
        </Text>{' '}
        {lastValidValue || '[empty string]'}
      </Text>
    </Box>
  );
}

export const useValidatedStateDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
