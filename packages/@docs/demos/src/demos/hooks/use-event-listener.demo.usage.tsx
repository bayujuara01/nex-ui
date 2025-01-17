import { useCallback, useState } from 'react';
import { Button } from '@nex-ui/core';
import { useEventListener } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useState, useCallback } from 'react';
import { Button } from '@nex-ui/core';
import { useEventListener } from '@nex-ui/hooks';

function Demo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const ref = useEventListener('click', increment);
  return <Button ref={ref}>Button clicks: {count}</Button>;
}
`;

function Demo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const ref = useEventListener('click', increment);
  return <Button ref={ref}>Button clicks: {count}</Button>;
}

export const useEventListenerDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
