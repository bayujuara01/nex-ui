import { IconClock } from '@tabler/icons-react';
import { rem } from '@nex-ui/core';
import { TimeInput } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@nex-ui/dates';
import { rem } from '@nex-ui/core';

function Demo() {
  return (
    <TimeInput
      leftSection={<IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
    />
  );
}
`;

function Demo() {
  return (
    <TimeInput
      leftSection={<IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
    />
  );
}

export const icon: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 340,
  component: Demo,
  code,
};
