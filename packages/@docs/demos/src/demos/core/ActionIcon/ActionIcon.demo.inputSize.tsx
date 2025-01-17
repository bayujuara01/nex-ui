import { ActionIcon, Group, TextInput } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { ActionIcon, Group, TextInput } from '@nex-ui/core';

function Demo() {
  return (
    <Group>
      <TextInput placeholder="sm size input" size="sm" />
      <ActionIcon size="input-sm" variant="default" aria-label="ActionIcon the same size as inputs">
        SM
      </ActionIcon>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <TextInput placeholder="sm size input" size="sm" />
      <ActionIcon size="input-sm" variant="default" aria-label="ActionIcon the same size as inputs">
        SM
      </ActionIcon>
    </Group>
  );
}

export const inputSize: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
