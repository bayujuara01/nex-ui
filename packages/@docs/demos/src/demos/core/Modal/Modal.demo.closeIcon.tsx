import { IconXboxX } from '@tabler/icons-react';
import { Button, Modal } from '@nex-ui/core';
import { useDisclosure } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { IconXboxX } from '@tabler/icons-react';
import { useDisclosure } from '@nex-ui/hooks';
import { Modal, Button } from '@nex-ui/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        closeButtonProps={{
          icon: <IconXboxX size={20} stroke={1.5} />,
        }}
      >
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        closeButtonProps={{
          icon: <IconXboxX size={20} stroke={1.5} />,
        }}
      >
        <AuthenticationForm noShadow noPadding />
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}

export const closeIcon: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
