import { Box, useMatches } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Box, useMatches } from '@nex-ui/core';

function Demo() {
  const color = useMatches({
    base: 'blue.9',
    sm: 'orange.9',
    lg: 'red.9',
  });

  return (
    <Box bg={color} c="white" p="xl">
      Box with color that changes based on screen size
    </Box>
  );
}
`;

function Demo() {
  const color = useMatches({
    base: 'blue.9',
    sm: 'orange.9',
    lg: 'red.9',
  });

  return (
    <Box bg={color} c="white" p="xl">
      Box with color that changes based on screen size
    </Box>
  );
}

export const useMatchesHook: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
