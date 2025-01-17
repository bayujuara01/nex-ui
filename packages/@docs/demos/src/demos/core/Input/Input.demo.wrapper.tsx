import { Input } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import { inputWrapperOnlyControls } from '../../../shared';

const code = `
import { Input } from '@nex-ui/core';

function Wrapper() {
  return (
    <Input.Wrapper{{props}}>
      <Input placeholder="Input inside Input.Wrapper" />
    </Input.Wrapper>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Input.Wrapper {...props}>
      <Input placeholder="Input inside Input.Wrapper" />
    </Input.Wrapper>
  );
}

export const wrapper: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 440,
  controls: inputWrapperOnlyControls,
};
