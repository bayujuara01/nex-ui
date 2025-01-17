import { IconHeart } from '@tabler/icons-react';
import { ActionIcon, Tooltip } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { ActionIcon, Tooltip } from '@nex-ui/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <ActionIcon size="xl" data-disabled onClick={(event) => event.preventDefault()}>
        <IconHeart />
      </ActionIcon>
    </Tooltip>
  );
}
`;

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <ActionIcon size="xl" data-disabled onClick={(event) => event.preventDefault()}>
        <IconHeart />
      </ActionIcon>
    </Tooltip>
  );
}

export const disabledTooltip: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
