import { NativeSelect } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import { inputControls } from '../../../shared';

const code = `
import { NativeSelect } from '@nex-ui/core';

function Demo() {
  return <NativeSelect{{props}} data={['React', 'Angular', 'Vue']} />;
}
`;

function Wrapper(props: any) {
  return <NativeSelect {...props} data={['React', 'Angular', 'Vue']} />;
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
