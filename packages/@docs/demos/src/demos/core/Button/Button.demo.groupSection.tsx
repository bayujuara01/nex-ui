import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { Button } from '@nex-ui/core';
import { useCounter } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { Button } from '@nex-ui/core';
import { useCounter } from '@nex-ui/hooks';

function Demo() {
  const [value, { increment, decrement }] = useCounter(135, { min: 0 });

  return (
    <Button.Group>
      <Button variant="default" radius="md" onClick={decrement}>
        <IconChevronDown color="var(--nex-color-red-text)" />
      </Button>
      <Button.GroupSection variant="default" bg="var(--nex-color-body)" miw={80}>
        {value}
      </Button.GroupSection>
      <Button variant="default" radius="md" onClick={increment}>
        <IconChevronUp color="var(--nex-color-teal-text)" />
      </Button>
    </Button.Group>
  );
}
`;

function Demo() {
  const [value, { increment, decrement }] = useCounter(135, { min: 0 });

  return (
    <Button.Group>
      <Button variant="default" radius="md" onClick={decrement}>
        <IconChevronDown color="var(--nex-color-red-text)" />
      </Button>
      <Button.GroupSection variant="default" bg="var(--nex-color-body)" miw={80}>
        {value}
      </Button.GroupSection>
      <Button variant="default" radius="md" onClick={increment}>
        <IconChevronUp color="var(--nex-color-teal-text)" />
      </Button>
    </Button.Group>
  );
}

export const groupSection: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
