import { Space, Text } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

function Wrapper(props: any) {
  return (
    <div style={{ display: 'flex' }}>
      <Text>First part</Text>
      <Space {...props} />
      <Text>Second part</Text>
    </div>
  );
}

const code = `
import { Text, Space } from '@nex-ui/core';

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <Text>First line</Text>
      <Space{{props}} />
      <Text>Second line</Text>
    </div>
  );
}
`;

export const vertical: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [{ prop: 'w', type: 'size', initialValue: 'md', libraryValue: '__' }],
};
