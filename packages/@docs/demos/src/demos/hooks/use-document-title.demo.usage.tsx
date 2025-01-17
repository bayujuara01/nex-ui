import { useState } from 'react';
import { Button } from '@nex-ui/core';
import { randomId, useDocumentTitle } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useState } from 'react';
import { useDocumentTitle, randomId } from '@nex-ui/hooks';
import { Button } from '@nex-ui/core';

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Button onClick={() => setTitle(randomId())}>
      Set document title to random id
    </Button>
  );
}`;

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return <Button onClick={() => setTitle(randomId())}>Set document title to random id</Button>;
}

export const useDocumentTitleDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
