import { Button } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import { gradientControls } from '../../../shared';

const code = (props: any) => `
import { Button } from '@nex-ui/core';

function Demo() {
  return (
    <Button
      variant="gradient"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      Gradient button
    </Button>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Button
      variant="gradient"
      gradient={{ from: props.gradientFrom, to: props.gradientTo, deg: props.gradientDegree }}
    >
      Gradient button
    </Button>
  );
}

export const gradient: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: gradientControls,
};
