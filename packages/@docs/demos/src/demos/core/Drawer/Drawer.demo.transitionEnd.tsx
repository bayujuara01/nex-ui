import { useState } from 'react';
import { Button, Drawer, Group } from '@nex-ui/core';
import { useDisclosure } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useState } from 'react';
import { Button, Group, Drawer } from '@nex-ui/core';
import { useDisclosure } from '@nex-ui/hooks';

function Demo() {
  const [firstOpened, firstHandlers] = useDisclosure(false);
  const [secondOpened, secondHandlers] = useDisclosure(false);
  const [drawerData, setDrawerData] = useState({
    title: '',
    message: '',
  });

  return (
    <>
      <Drawer
        opened={firstOpened}
        onClose={() => {
          firstHandlers.close();
          setDrawerData({ title: '', message: '' });
        }}
        title={drawerData.title}
      >
        {drawerData.message}
      </Drawer>
      <Drawer
        opened={secondOpened}
        onClose={secondHandlers.close}
        onExitTransitionEnd={() => setDrawerData({ title: '', message: '' })}
        title={drawerData.title}
      >
        {drawerData.message}
      </Drawer>

      <Group>
        <Button
          onClick={() => {
            firstHandlers.open();
            setDrawerData({ title: 'Edit your profile', message: 'Imagine a form here' });
          }}
        >
          Clear data in onClose
        </Button>

        <Button
          onClick={() => {
            secondHandlers.open();
            setDrawerData({ title: 'Edit your profile', message: 'Imagine a form here' });
          }}
        >
          Clear data in onExitTransitionEnd
        </Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const [firstOpened, firstHandlers] = useDisclosure(false);
  const [secondOpened, secondHandlers] = useDisclosure(false);
  const [drawerData, setDrawerData] = useState({
    title: '',
    message: '',
  });

  return (
    <>
      <Drawer
        opened={firstOpened}
        onClose={() => {
          firstHandlers.close();
          setDrawerData({ title: '', message: '' });
        }}
        transitionProps={{ duration: 300, exitDuration: 1000 }}
        title={drawerData.title}
      >
        {drawerData.message}
      </Drawer>
      <Drawer
        opened={secondOpened}
        onClose={secondHandlers.close}
        transitionProps={{ duration: 300, exitDuration: 1000 }}
        onExitTransitionEnd={() => setDrawerData({ title: '', message: '' })}
        title={drawerData.title}
      >
        {drawerData.message}
      </Drawer>

      <Group>
        <Button
          onClick={() => {
            firstHandlers.open();
            setDrawerData({ title: 'Edit your profile', message: 'Imagine a form here' });
          }}
          variant="default"
        >
          Clear data in onClose
        </Button>

        <Button
          onClick={() => {
            secondHandlers.open();
            setDrawerData({ title: 'Edit your profile', message: 'Imagine a form here' });
          }}
          variant="default"
        >
          Clear data in onExitTransitionEnd
        </Button>
      </Group>
    </>
  );
}

export const transitionEnd: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
  defaultExpanded: false,
};
