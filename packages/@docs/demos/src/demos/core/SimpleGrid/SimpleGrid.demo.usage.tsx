import { SimpleGrid, SimpleGridProps } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import { defaultItems } from './_demo-item';

function Demo(props: SimpleGridProps) {
  return (
    <SimpleGrid {...props} id="grid-configurator">
      {defaultItems}
    </SimpleGrid>
  );
}

const code = `
import { SimpleGrid } from '@nex-ui/core';

function Demo() {
  return (
    <SimpleGrid{{props}}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  )
}
`;

export const usage: MantineDemo = {
  type: 'configurator',
  component: Demo,
  code,
  controls: [
    { prop: 'cols', type: 'number', initialValue: 3, min: 1, max: 6, step: 1, libraryValue: '__' },
    { prop: 'spacing', type: 'size', initialValue: 'md', libraryValue: 'md' },
    { prop: 'verticalSpacing', type: 'size', initialValue: 'md', libraryValue: 'md' },
  ],
};
