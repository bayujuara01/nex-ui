import { useRef } from 'react';
import { Button, Group } from '@nex-ui/core';
import { Dropzone } from '@nex-ui/dropzone';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useRef } from 'react';
import { Button, Group } from '@nex-ui/core';
import { Dropzone } from '@nex-ui/dropzone';

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <Dropzone openRef={openRef} onDrop={() => {}} activateOnClick={false}>
      <Group justify="center">
        <Button onClick={() => openRef.current?.()} style={{ pointerEvents: 'all' }}>
          Select files
        </Button>
      </Group>
    </Dropzone>
  );
}
`;

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <Dropzone openRef={openRef} onDrop={() => {}} activateOnClick={false}>
      <Group justify="center">
        <Button onClick={() => openRef.current?.()} style={{ pointerEvents: 'all' }}>
          Select files
        </Button>
      </Group>
    </Dropzone>
  );
}

export const enableChildPointerEvent: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
