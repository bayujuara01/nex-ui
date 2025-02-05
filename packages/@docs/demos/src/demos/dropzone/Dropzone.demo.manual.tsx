import { useRef } from 'react';
import { Button, Group } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import { BaseDemo } from './_base';

const code = `
import { useRef } from 'react';
import { Button, Group } from '@nex-ui/core';
import { Dropzone } from '@nex-ui/dropzone';

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <>
      <Dropzone openRef={openRef} onDrop={() => {}}>
        {/* children */}
      </Dropzone>

      <Group justify="center" mt="md">
        <Button onClick={() => openRef.current?.()}>Select files</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <>
      <BaseDemo openRef={openRef} />
      <Group justify="center" mt="md">
        <Button onClick={() => openRef.current?.()}>Select files</Button>
      </Group>
    </>
  );
}

export const manual: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
