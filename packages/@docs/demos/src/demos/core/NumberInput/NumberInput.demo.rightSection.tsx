import { IconChartBubble } from '@tabler/icons-react';
import { NumberInput } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { NumberInput } from '@nex-ui/core';
import { IconChartBubble } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NumberInput label="Hide controls" placeholder="Hide controls" hideControls />
      <NumberInput
        label="Custom right section"
        placeholder="Custom right section"
        mt="md"
        rightSection={<IconChartBubble />}
        rightSectionPointerEvents="none"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <NumberInput label="Hide controls" placeholder="Hide controls" hideControls />
      <NumberInput
        label="Custom right section"
        placeholder="Custom right section"
        mt="md"
        rightSection={<IconChartBubble />}
        rightSectionPointerEvents="none"
      />
    </>
  );
}

export const rightSection: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
