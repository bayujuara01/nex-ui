import { IconArrowLeft } from '@tabler/icons-react';
import { Anchor, Box, Center, rem } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Center, Anchor, Box, rem } from '@nex-ui/core';
import { IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    <Anchor href="https://nex-ui.dev" target="_blank">
      <Center inline>
        <IconArrowLeft style={{ width: rem(12), height: rem(12) }} />
        <Box ml={5}>Back to Nex UI website</Box>
      </Center>
    </Anchor>
  );
}
`;

function Demo() {
  return (
    <Anchor href="https://nex-ui.dev" target="_blank">
      <Center inline>
        <IconArrowLeft style={{ width: rem(12), height: rem(12) }} className="mantine-rotate-rtl" />
        <Box ml={5}>Back to Nex UI website</Box>
      </Center>
    </Anchor>
  );
}

export const inline: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
