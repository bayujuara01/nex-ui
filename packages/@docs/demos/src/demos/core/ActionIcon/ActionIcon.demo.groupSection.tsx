import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { ActionIcon } from '@nex-ui/core';
import { useCounter } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { ActionIcon } from '@nex-ui/core';
import { useCounter } from '@nex-ui/hooks';

function Demo() {
  const [value, { increment, decrement }] = useCounter(135, { min: 0 });

  return (
    <ActionIcon.Group>
      <ActionIcon variant="default" size="lg" radius="md" onClick={decrement}>
        <IconChevronDown color="var(--mantine-color-red-text)" />
      </ActionIcon>
      <ActionIcon.GroupSection variant="default" size="lg" bg="var(--mantine-color-body)" miw={60}>
        {value}
      </ActionIcon.GroupSection>
      <ActionIcon variant="default" size="lg" radius="md" onClick={increment}>
        <IconChevronUp color="var(--mantine-color-teal-text)" />
      </ActionIcon>
    </ActionIcon.Group>
  );
}
`;

function Demo() {
  const [value, { increment, decrement }] = useCounter(135, { min: 0 });

  return (
    <ActionIcon.Group>
      <ActionIcon variant="default" size="lg" radius="md" onClick={decrement}>
        <IconChevronDown color="var(--mantine-color-red-text)" />
      </ActionIcon>
      <ActionIcon.GroupSection variant="default" size="lg" bg="var(--mantine-color-body)" miw={60}>
        {value}
      </ActionIcon.GroupSection>
      <ActionIcon variant="default" size="lg" radius="md" onClick={increment}>
        <IconChevronUp color="var(--mantine-color-teal-text)" />
      </ActionIcon>
    </ActionIcon.Group>
  );
}

export const groupSection: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
