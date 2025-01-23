import { useState } from 'react';
import { Checkbox, Group, Stack, Text } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import classes from './Checkbox.demo.card.module.css';

const cssCode = `.root {
  position: relative;
  padding: var(--nex-spacing-md);
  transition: border-color 150ms ease;

  &[data-checked] {
    border-color: var(--nex-primary-color-filled);
  }

  @mixin hover {
    @mixin light {
      background-color: var(--nex-color-gray-0);
    }

    @mixin dark {
      background-color: var(--nex-color-dark-6);
    }
  }
}

.label {
  font-family: var(--nex-font-family-monospace);
  font-weight: bold;
  font-size: var(--nex-font-size-md);
  line-height: 1.3;
  color: var(--nex-color-bright);
}

.description {
  margin-top: 8px;
  color: var(--nex-color-dimmed);
  font-size: var(--nex-font-size-xs);
}
`;

const code = `
import { useState } from 'react';
import { Checkbox, Group, Stack, Text } from '@nex-ui/core';
import classes from './Demo.module.css';

const data = [
  {
    name: '@nex-ui/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
  },
  { name: '@nex-ui/hooks', description: 'Collection of reusable hooks for React applications.' },
  { name: '@nex-ui/notifications', description: 'Notifications system' },
];

function Demo() {
  const [value, setValue] = useState<string[]>([]);

  const cards = data.map((item) => (
    <Checkbox.Card className={classes.root} radius="md" value={item.name} key={item.name}>
      <Group wrap="nowrap" align="flex-start">
        <Checkbox.Indicator />
        <div>
          <Text className={classes.label}>{item.name}</Text>
          <Text className={classes.description}>{item.description}</Text>
        </div>
      </Group>
    </Checkbox.Card>
  ));

  return (
    <>
      <Checkbox.Group
        value={value}
        onChange={setValue}
        label="Pick packages to install"
        description="Choose all packages that you will need in your application"
      >
        <Stack pt="md" gap="xs">
          {cards}
        </Stack>
      </Checkbox.Group>

      <Text fz="xs" mt="md">
        CurrentValue: {value.join(', ') || '–'}
      </Text>
    </>
  );
}
`;

const data = [
  {
    name: '@nex-ui/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
  },
  { name: '@nex-ui/hooks', description: 'Collection of reusable hooks for React applications.' },
  { name: '@nex-ui/notifications', description: 'Notifications system' },
];

function Demo() {
  const [value, setValue] = useState<string[]>([]);

  const cards = data.map((item) => (
    <Checkbox.Card className={classes.root} radius="md" value={item.name} key={item.name}>
      <Group wrap="nowrap" align="flex-start">
        <Checkbox.Indicator />
        <div>
          <Text className={classes.label}>{item.name}</Text>
          <Text className={classes.description}>{item.description}</Text>
        </div>
      </Group>
    </Checkbox.Card>
  ));

  return (
    <>
      <Checkbox.Group
        value={value}
        onChange={setValue}
        label="Pick packages to install"
        description="Choose all packages that you will need in your application"
      >
        <Stack pt="md" gap="xs">
          {cards}
        </Stack>
      </Checkbox.Group>

      <Text fz="xs" mt="md">
        CurrentValue: {value.join(', ') || '–'}
      </Text>
    </>
  );
}

export const cardGroup: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 320,
  component: Demo,
  defaultExpanded: false,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'Demo.module.css', language: 'scss', code: cssCode },
  ],
};
