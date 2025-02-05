import { Box, Text } from '@nex-ui/core';
import { useInViewport } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Box, Text } from '@nex-ui/core';
import { useInViewport } from '@nex-ui/hooks';

function Demo() {
  const { ref, inViewport } = useInViewport();
  return (
    <>
      <Text ta="center">{inViewport ? 'Box is visible' : 'Scroll to see box'}</Text>
      <Box h={64} style={{ overflow: 'scroll' }}>
        <Box h={128}></Box>
        <Box ref={ref} bg="blue" h={32} p={8}>
          <Text ta="center" c="white">
            A box
          </Text>
        </Box>
      </Box>
    </>
  );
}
`;

function Demo() {
  const { ref, inViewport } = useInViewport();
  return (
    <>
      <Text ta="center">{inViewport ? 'Box is visible' : 'Scroll to see box'}</Text>
      <Box h={64} style={{ overflow: 'scroll' }}>
        <Box h={128} />
        <Box ref={ref} bg="blue" h={32} p={8}>
          <Text ta="center" c="white">
            A box
          </Text>
        </Box>
      </Box>
    </>
  );
}

export const useInViewportDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
