import { TextInput } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import { inputControls } from '../../../shared';

const code = `
import { TextInput } from '@nex-ui/core';


function Demo() {
  return (
    <TextInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <TextInput {...props} placeholder="Input placeholder" />;
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
