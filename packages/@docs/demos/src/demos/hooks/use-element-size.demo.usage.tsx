import { Group, rem, Text, useNexTheme } from '@nex-ui/core';
import { useElementSize } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useElementSize } from '@nex-ui/hooks';
import { rem } from '@nex-ui/core';

function Demo() {
  const { ref, width, height } = useElementSize();

  return (
    <>
      <textarea ref={ref} style={{ width: rem(400), height: rem(120) }} />
      <div>Width: {width}, height: {height}</div>
    </>
  );
}`;

function Demo() {
  const theme = useNexTheme();
  const { ref, width, height } = useElementSize();

  return (
    <>
      <Text ta="center" size="sm" style={{ marginBottom: theme.spacing.xs }}>
        Resize textarea by dragging its right bottom corner
      </Text>

      <Group justify="center">
        <textarea
          ref={ref}
          aria-label="Resize me"
          style={{
            width: rem(400),
            height: rem(120),
            border: 'none',
            backgroundColor: 'var(--mantine-color-body)',
            position: 'relative',
          }}
        />
      </Group>
      <Text ta="center" mt="sm">
        Width: {width}, height: {height}
      </Text>
    </>
  );
}

export const useElementSizeDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  dimmed: true,
};
