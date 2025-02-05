import { SegmentedControl } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { SegmentedControl } from '@nex-ui/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue', 'Svelte']} />;
}
`;

function Wrapper(props: any) {
  return <SegmentedControl data={['React', 'Angular', 'Vue', 'Svelte']} {...props} />;
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [{ prop: 'color', type: 'color', initialValue: 'blue', libraryValue: null }],
};
