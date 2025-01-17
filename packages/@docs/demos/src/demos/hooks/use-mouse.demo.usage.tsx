import { Code, Text } from '@nex-ui/core';
import { useMouse } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Text, Code } from '@nex-ui/core';
import { useMouse } from '@nex-ui/hooks';

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text ta="center">
      Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
    </Text>
  );
}`;

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text ta="center">
      Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
    </Text>
  );
}

export const useMouseUsage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
