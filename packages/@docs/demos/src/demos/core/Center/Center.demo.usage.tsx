import { Box, Center } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Center, Box } from '@nex-ui/core';

function Demo() {
  return (
    <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
      <Box bg="var(--mantine-color-blue-light)">All elements inside Center are centered</Box>
    </Center>
  );
}
`;

function Demo() {
  return (
    <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
      <Box bg="var(--mantine-color-blue-light)">All elements inside Center are centered</Box>
    </Center>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
