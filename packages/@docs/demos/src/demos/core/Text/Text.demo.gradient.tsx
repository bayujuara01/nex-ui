import { Text } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import { gradientControls } from '../../../shared';

const code = (props: any) => `
import { Text } from '@nex-ui/core';

function Demo() {
  return (
    <Text
      size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      Gradient Text
    </Text>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Text
      size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: props.gradientFrom, to: props.gradientTo, deg: props.gradientDegree }}
    >
      Gradient Text
    </Text>
  );
}

export const gradient: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: gradientControls,
};
