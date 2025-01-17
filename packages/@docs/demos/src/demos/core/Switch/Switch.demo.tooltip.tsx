import { Switch, Tooltip } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Switch, Tooltip } from '@nex-ui/core';

function Demo() {
  return (
    <Tooltip label="Switch tooltip" refProp="rootRef">
      <Switch label="Switch with tooltip" />
    </Tooltip>
  );
}
`;

function Demo() {
  return (
    <Tooltip label="Switch tooltip" refProp="rootRef">
      <Switch label="Switch with tooltip" />
    </Tooltip>
  );
}

export const tooltip: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
