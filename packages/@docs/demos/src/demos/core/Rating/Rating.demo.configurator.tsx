import { Rating, RatingProps } from '@nex-ui/core';
import { MantineDemo, ConfiguratorControlOptions } from '@nex-uix/demo';

const code = `
import { Rating } from '@nex-ui/core';

function Demo() {
  return <Rating defaultValue={2}{{props}} />
}
`;

function Wrapper(props: RatingProps) {
  return <Rating defaultValue={2} {...props} />;
}

const MARKS = [
  { value: 0, label: 'sm' },
  { value: 50, label: 'md' },
  { value: 100, label: 'lg' },
]

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { prop: 'color', type: 'color', initialValue: 'yellow', libraryValue: 'yellow' },
    { prop: 'size', type: 'custom-size', initialValue: 'md', libraryValue: 'md', data: MARKS, step: 50 },
    { prop: 'count', type: 'number', initialValue: 5, libraryValue: 5, min: 1, max: 8 },
    { prop: 'highlightSelectedOnly', type: 'boolean', initialValue: false, libraryValue: false },
  ],
};
