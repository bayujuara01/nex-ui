import { useState } from 'react';
import { Button } from '@nex-ui/core';
import { useLogger } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useState } from 'react';
import { useLogger } from '@nex-ui/hooks';
import { Button } from '@nex-ui/core';

function Demo() {
  const [count, setCount] = useState(0);
  useLogger('Demo', [{ count, hello: 'world' }]);
  return <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>;
}
`;

function Demo() {
  const [count, setCount] = useState(0);
  useLogger('Demo', [{ count, hello: 'world' }]);
  return <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>;
}

export const useLoggerDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
