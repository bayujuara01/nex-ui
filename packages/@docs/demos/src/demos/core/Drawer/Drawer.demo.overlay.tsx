import { Button, Drawer } from '@nex-ui/core';
import { useDisclosure } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { useDisclosure } from '@nex-ui/hooks';
import { Drawer, Button } from '@nex-ui/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <AuthenticationForm noShadow noPadding />
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}

export const overlay: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
