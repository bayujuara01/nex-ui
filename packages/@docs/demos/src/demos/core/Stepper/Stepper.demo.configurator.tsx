import { Stepper, StepperProps } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

function Wrapper(props: Partial<StepperProps>) {
  return (
    <Stepper {...props} active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}

const code = `
import { Stepper } from '@nex-ui/core';

function Demo() {
  return (
    <Stepper{{props}} active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: '100%',
  controls: [
    { prop: 'color', type: 'color', initialValue: 'blue', libraryValue: 'blue' },
    { prop: 'radius', type: 'size', initialValue: 'xl', libraryValue: 'xl' },
    { prop: 'size', type: 'size', initialValue: 'md', libraryValue: 'md' },
  ],
};
