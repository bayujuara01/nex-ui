import { IconBiohazard, IconRadioactive } from '@tabler/icons-react';
import { Checkbox, CheckboxProps } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Checkbox, CheckboxProps } from '@nex-ui/core';
import { IconBiohazard, IconRadioactive } from '@tabler/icons-react';

const CheckboxIcon: CheckboxProps['icon'] = ({ indeterminate, ...others }) =>
  indeterminate ? <IconRadioactive {...others} /> : <IconBiohazard {...others} />;

function Demo() {
  return (
    <>
      <Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
      <Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
    </>
  );
}
`;

const CheckboxIcon: CheckboxProps['icon'] = ({ indeterminate, ...others }) =>
  indeterminate ? <IconRadioactive {...others} /> : <IconBiohazard {...others} />;

function Demo() {
  return (
    <>
      <Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
      <Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
    </>
  );
}

export const icon: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
