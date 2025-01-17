import { InlineCodeHighlight } from '@nex-ui/code-highlight';
import { Text } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Text } from '@nex-ui/core';
import { InlineCodeHighlight } from '@nex-ui/code-highlight';

function Demo() {
  return (
    <Text>
      You can highlight code inline:{' '}
      <InlineCodeHighlight code='<InlineCodeHighlight code="" language="tsx" />' language="tsx" />.
      Is not that cool?
    </Text>
  );
}
`;

function Demo() {
  return (
    <Text>
      You can highlight code inline:{' '}
      <InlineCodeHighlight code='<InlineCodeHighlight code="" language="tsx" />' language="tsx" />.
      Is not that cool?
    </Text>
  );
}

export const inline: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
