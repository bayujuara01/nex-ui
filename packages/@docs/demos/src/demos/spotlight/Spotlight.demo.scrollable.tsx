import { IconSearch } from '@tabler/icons-react';
import { rem } from '@nex-ui/core';
import { SpotlightActionData } from '@nex-ui/spotlight';
import { MantineDemo } from '@nex-uix/demo';
import { SpotlightDemoBase } from './_demo-base';

const code = `
import { rem, Button } from '@nex-ui/core';
import { Spotlight, SpotlightActionData, spotlight } from '@nex-ui/spotlight';
import { IconSearch } from '@tabler/icons-react';

const actions: SpotlightActionData[] = Array(100)
  .fill(0)
  .map((_, index) => ({
    id: \`action-\${index}\`,
    label: \`Action \${index}\`,
    description: \`Action \${index} description\`,
  }));

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        scrollable
        maxHeight={350}
        searchProps={{
          leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
`;

const actions: SpotlightActionData[] = Array(100)
  .fill(0)
  .map((_, index) => ({
    id: `action-${index}`,
    label: `Action ${index}`,
    description: `Action ${index} description`,
  }));

function Demo() {
  return (
    <SpotlightDemoBase
      actions={actions}
      nothingFound="Nothing found..."
      highlightQuery
      scrollable
      maxHeight={350}
      shortcut={null}
      searchProps={{
        leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
        placeholder: 'Search...',
      }}
    />
  );
}

export const scrollable: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
