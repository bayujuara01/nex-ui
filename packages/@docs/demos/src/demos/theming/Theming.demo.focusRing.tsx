import { Button, Code, Group, NexThemeProvider, Text } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

function Demo() {
  return (
    <>
      <Text>
        Focus ring: <Code>auto</Code>
      </Text>

      <Group mt="xs">
        <Button size="xs">Button 1</Button>
        <Button size="xs">Button 2</Button>
      </Group>

      <NexThemeProvider inherit theme={{ focusRing: 'always' }}>
        <Text mt="lg">
          Focus ring: <Code>always</Code>
        </Text>

        <Group mt="xs">
          <Button size="xs">Button 1</Button>
          <Button size="xs">Button 2</Button>
        </Group>
      </NexThemeProvider>

      <NexThemeProvider inherit theme={{ focusRing: 'never' }}>
        <Text mt="lg">
          Focus ring: <Code>never</Code>
        </Text>

        <Group mt="xs">
          <Button size="xs">Button 1</Button>
          <Button size="xs">Button 2</Button>
        </Group>
      </NexThemeProvider>
    </>
  );
}

export const focusRing: MantineDemo = {
  type: 'code',
  component: Demo,
};
