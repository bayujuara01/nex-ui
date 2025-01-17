import { Button, Group, Text } from '@nex-ui/core';
import { useWindowScroll } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useWindowScroll } from '@nex-ui/hooks';
import { Button, Text, Group } from '@nex-ui/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group justify="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}
`;

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group justify="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}

export const useWindowScrollDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
