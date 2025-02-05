import { Box, Button, Text, TextInput } from '@nex-ui/core';
import { useFocusWithin } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useFocusWithin } from '@nex-ui/hooks';
import { TextInput, Button, Box, Text } from '@nex-ui/core';

function Demo() {
  const { ref, focused } = useFocusWithin();

  return (
    <div ref={ref}>
      <Box
        p="xl"
        style={{
          backgroundColor: focused ? 'var(--mantine-color-blue-light)' : 'transparent',
        }}
      >
        <Text size="sm">One of elements has focus: {focused.toString()}</Text>
        <TextInput label="Focus this input" placeholder="Styles will be added to parent" />
        <Button mt="md">Button</Button>
      </Box>
    </div>
  );
}
`;

function Demo() {
  const { ref, focused } = useFocusWithin();

  return (
    <div ref={ref}>
      <Box
        p="xl"
        style={{
          backgroundColor: focused ? 'var(--mantine-color-blue-light)' : 'transparent',
        }}
      >
        <Text size="sm">One of elements has focus: {focused.toString()}</Text>
        <TextInput label="Focus this input" placeholder="Styles will be added to parent" />
        <Button mt="md">Button</Button>
      </Box>
    </div>
  );
}

export const useFocusWithinDemo: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
