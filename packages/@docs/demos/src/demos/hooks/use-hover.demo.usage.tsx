import { rem, Text } from '@nex-ui/core';
import { useHover } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useHover } from '@nex-ui/hooks';

function Demo() {
  const { hovered, ref } = useHover();
  return (
    <div ref={ref}>
      {hovered ? 'I am hovered' : 'Put mouse over me please'}
    </div>
  );
}
`;

function Demo() {
  const { hovered, ref } = useHover();
  return (
    <div
      ref={ref}
      style={{
        height: rem(60),
        backgroundColor: 'var(--mantine-color-blue-light)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>{hovered ? 'I am hovered' : 'Put mouse over me please'}</Text>
    </div>
  );
}

export const useHoverDemo: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
