import { Text } from '@nex-ui/core';
import { useOs } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useOs } from '@nex-ui/hooks';

function Demo() {
  const os = useOs();
  return <>Your os is <b>{os}</b></>;
}
`;

function Demo() {
  const os = useOs();
  return (
    <Text ta="center">
      Your os is <b>{os}</b>
    </Text>
  );
}

export const useOsDemo: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
