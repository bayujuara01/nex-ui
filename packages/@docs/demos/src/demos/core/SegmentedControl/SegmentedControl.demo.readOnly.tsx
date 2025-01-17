import { SegmentedControl } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { SegmentedControl } from '@nex-ui/core';

function Demo() {
  return <SegmentedControl readOnly defaultValue="Angular" data={['React', 'Angular', 'Vue']} />;
}
`;

function Demo() {
  return <SegmentedControl readOnly defaultValue="Angular" data={['React', 'Angular', 'Vue']} />;
}

export const readOnly: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
