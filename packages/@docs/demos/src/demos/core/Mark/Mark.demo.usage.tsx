import { Mark, MarkProps, Text } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

function Wrapper(props: MarkProps) {
  return (
    <Text>
      Highlight <Mark {...props}>this chunk</Mark> of the text
    </Text>
  );
}

const code = `
import { Text, Mark } from '@nex-ui/core';

function Demo() {
  return (
    <Text>
      Highlight <Mark{{props}}>this chunk</Mark> of the text
    </Text>
  );
}
`;

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: '100%',
  controls: [{ prop: 'color', type: 'color', initialValue: 'yellow', libraryValue: 'yellow' }],
};
