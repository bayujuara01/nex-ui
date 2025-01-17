import { TimeInput } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';
import { inputControls } from '../../../shared';

const code = `
import { TimeInput } from '@nex-ui/dates';


function Demo() {
  return (
    <TimeInput
      {{props}}
    />
  );
}
`;

function Wrapper(props: any) {
  return <TimeInput {...props} />;
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
