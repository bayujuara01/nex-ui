import { useState } from 'react';
import { Text } from '@nex-ui/core';
import { usePageLeave } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useState } from 'react';
import { usePageLeave } from '@nex-ui/hooks';

function Demo() {
  const [leftsCount, setLeftsCount] = useState(0);
  usePageLeave(() => setLeftsCount((p) => p + 1));
  return <>Mouse left the page {leftsCount} times</>;
}
`;

function Demo() {
  const [leftsCount, setLeftsCount] = useState(0);
  usePageLeave(() => setLeftsCount((p) => p + 1));
  return <Text ta="center">Mouse left the page {leftsCount} times</Text>;
}

export const usePageLeaveDemo: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
