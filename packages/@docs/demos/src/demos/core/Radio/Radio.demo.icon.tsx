import { CheckIcon, Radio } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Radio, CheckIcon } from '@nex-ui/core';

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}
`;

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}

export const icon: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
