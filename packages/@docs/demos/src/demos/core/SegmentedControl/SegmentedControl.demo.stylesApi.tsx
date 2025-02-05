import { SegmentedControl } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import { SegmentedControlStylesApi } from '@docs/styles-api';

const code = `
import { SegmentedControl } from '@nex-ui/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`;

function Demo(props: any) {
  return <SegmentedControl data={['React', 'Angular', 'Vue']} {...props} />;
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: SegmentedControlStylesApi,
  component: Demo,
  code,
  centered: true,
};
