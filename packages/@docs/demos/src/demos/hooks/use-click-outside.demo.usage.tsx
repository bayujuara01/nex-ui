import { useState } from 'react';
import { Button, Group, Paper, rem } from '@nex-ui/core';
import { useClickOutside } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useState } from 'react';
import { Paper, Button } from '@nex-ui/core';
import { useClickOutside } from '@nex-ui/hooks';

function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      {opened && (
        <Paper ref={ref} shadow="sm">
          <span>Click outside to close</span>
        </Paper>
      )}
    </>
  );
}
`;

function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <div style={{ position: 'relative' }}>
      <Group justify="center">
        <Button onClick={() => setOpened(true)}>Open dropdown</Button>
      </Group>

      {opened && (
        <Paper
          ref={ref}
          shadow="sm"
          style={{
            width: rem(300),
            height: rem(60),
            position: 'absolute',
            top: 0,
            left: `calc(50% - ${rem(150)})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <span>Click outside to close</span>
        </Paper>
      )}
    </div>
  );
}

export const useClickOutsideUsage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  dimmed: true,
};
