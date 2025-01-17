import { IconHeart } from '@tabler/icons-react';
import { ActionIcon, Group, Switch } from '@nex-ui/core';
import { useDisclosure } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { ActionIcon, Group, Switch } from '@nex-ui/core';
import { useDisclosure } from '@nex-ui/hooks';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <Group>
        <ActionIcon loading={loading}>
          <IconHeart size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon variant="light" loading={loading}>
          <IconHeart size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon variant="outline" loading={loading}>
          <IconHeart size={18} stroke={1.5} />
        </ActionIcon>
      </Group>

      <Switch checked={loading} onChange={toggle} label="Loading state" mt="md" />
    </>
  );
}
`;

function Demo() {
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <Group>
        <ActionIcon loading={loading}>
          <IconHeart size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon variant="light" loading={loading}>
          <IconHeart size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon variant="outline" loading={loading}>
          <IconHeart size={18} stroke={1.5} />
        </ActionIcon>
      </Group>

      <Switch checked={loading} onChange={toggle} label="Loading state" mt="md" />
    </>
  );
}

export const loading: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
