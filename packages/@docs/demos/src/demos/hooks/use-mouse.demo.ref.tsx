import { Box, Code, Group, Text } from '@nex-ui/core';
import { useMouse } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Text, Code, Group, Box } from '@nex-ui/core';
import { useMouse } from '@nex-ui/hooks';

function Demo() {
  const { ref, x, y } = useMouse();

  return (
    <>
      <Group justify="center">
        <Box ref={ref} w={300} h={180} bg="var(--mantine-color-blue-light)" />
      </Group>
      <Text ta="center">
        Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
      </Text>
    </>
  );
}
`;

function Demo() {
  const { ref, x, y } = useMouse();

  return (
    <>
      <Group justify="center">
        <Box ref={ref} w={300} h={180} bg="var(--mantine-color-blue-light)" />
      </Group>
      <Text ta="center" mt="sm">
        Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
      </Text>
    </>
  );
}

export const useMouseRef: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
