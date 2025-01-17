import { RingProgress, Text } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { RingProgress, Text } from '@nex-ui/core';

function Demo() {
  return (
    <RingProgress
      label={
        <Text size="xs" ta="center">
          Application data usage
        </Text>
      }
      sections={[
        { value: 40, color: 'cyan' },
        { value: 15, color: 'orange' },
        { value: 15, color: 'grape' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <RingProgress
      label={
        <Text size="xs" ta="center">
          Application data usage
        </Text>
      }
      sections={[
        { value: 40, color: 'cyan' },
        { value: 15, color: 'orange' },
        { value: 15, color: 'grape' },
      ]}
    />
  );
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
