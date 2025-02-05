import { Button, Stack } from '@nex-ui/core';
import { useFullscreen } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const refCode = `
import { useFullscreen } from '@nex-ui/hooks';
import { Button, Stack } from '@nex-ui/core';

function RefDemo() {
  const { ref, toggle, fullscreen } = useFullscreen();

  return (
    <Stack align="center">
      <img
        ref={ref}
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png"
        alt="For demo"
        width={200}
      />
      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'View Image Fullscreen'}
      </Button>
    </Stack>
  );
}
`;

function RefDemo() {
  const { ref, toggle, fullscreen } = useFullscreen();

  return (
    <Stack align="center">
      <img
        ref={ref}
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png"
        alt="For demo"
        width={200}
      />
      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'View Image Fullscreen'}
      </Button>
    </Stack>
  );
}

export const useFullscreenRefDemo: MantineDemo = {
  type: 'code',
  code: refCode,
  component: RefDemo,
};
