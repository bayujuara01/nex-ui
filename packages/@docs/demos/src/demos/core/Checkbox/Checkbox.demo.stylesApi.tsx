import { Checkbox } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import { CheckboxStylesApi } from '@docs/styles-api';

const code = `
import { Checkbox } from '@nex-ui/core';

function Demo() {
  return (
    <Checkbox
      label="Checkbox"
      description="Checkbox description"
      error="Checkbox error"
      defaultChecked
     {{props}}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <Checkbox
      label="Checkbox"
      description="Checkbox description"
      error="Checkbox error"
      defaultChecked
      {...props}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: CheckboxStylesApi,
  component: Demo,
  code,
  centered: true,
};
