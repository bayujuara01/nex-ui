import { Button, Group, Switch } from '@nex-ui/core';
import { useDisclosure } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Button, Group, Switch } from '@nex-ui/core';
import { useDisclosure } from '@nex-ui/hooks';

function Demo() {
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <Group>
        <Button loading={loading}>Filled button</Button>
        <Button variant="light" loading={loading}>
          Light button
        </Button>
        <Button variant="outline" loading={loading}>
          Outline button
        </Button>
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
        <Button loading={loading}>Filled button</Button>
        <Button variant="light" loading={loading}>
          Light button
        </Button>
        <Button variant="outline" loading={loading}>
          Outline button
        </Button>
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
