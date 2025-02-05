import { useState } from 'react';
import { IconCheck, IconX } from '@tabler/icons-react';
import { rem, Switch, useNexTheme } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useState } from 'react';
import { Switch, useNexTheme, rem } from '@nex-ui/core';
import { IconCheck, IconX } from '@tabler/icons-react';

function Demo() {
  const theme = useNexTheme();
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      color="teal"
      size="md"
      label="Switch with thumb icon"
      thumbIcon={
        checked ? (
          <IconCheck
            style={{ width: rem(12), height: rem(12) }}
            color={theme.colors.teal[6]}
            stroke={3}
          />
        ) : (
          <IconX
            style={{ width: rem(12), height: rem(12) }}
            color={theme.colors.red[6]}
            stroke={3}
          />
        )
      }
    />
  );
}
`;

function Demo() {
  const theme = useNexTheme();
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      color="teal"
      size="md"
      label="Switch with thumb icon"
      thumbIcon={
        checked ? (
          <IconCheck
            style={{ width: rem(12), height: rem(12) }}
            color={theme.colors.teal[6]}
            stroke={3}
          />
        ) : (
          <IconX
            style={{ width: rem(12), height: rem(12) }}
            color={theme.colors.red[6]}
            stroke={3}
          />
        )
      }
    />
  );
}

export const thumbIcon: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
