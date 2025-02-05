import { Button, Tooltip } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

function Wrapper(props: any) {
  return (
    <Tooltip label="Tooltip" {...props}>
      <Button>With tooltip</Button>
    </Tooltip>
  );
}

const code = `
import { Tooltip, Button } from '@nex-ui/core';

function Demo() {
  return (
    <Tooltip label="Tooltip"{{props}}>
      <Button>With tooltip</Button>
    </Tooltip>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      prop: 'color',
      type: 'color',
      initialValue: 'blue',
      libraryValue: '__none__',
    },
  ],
};
