import { Text } from '@nex-ui/core';
import { useViewportSize } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useViewportSize } from '@nex-ui/hooks';

function Demo() {
  const { height, width } = useViewportSize();
  return <>Width: {width}, height: {height}</>;
}
`;

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <Text ta="center">
      Width: {width}, height: {height}
    </Text>
  );
}

export const useViewportSizeDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
