import { useEffect, useState } from 'react';
import { Button, Group, NexProvider, useMantineColorScheme } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = (props: any) => `
import { NexProvider, Button, Group } from '@nex-ui/core';

function Demo() {
  return (
    <NexProvider theme={{ primaryShade: ${props.primaryShade} }}>
      <Group>
        <Button>Filled</Button>
        <Button variant="light">Light</Button>
        <Button variant="outline">Outline</Button>
      </Group>
    </NexProvider>
  );
}
`;

function Wrapper(props: any) {
  const [attr, setAttr] = useState<string | undefined>(undefined);
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    setAttr(colorScheme);
  }, [colorScheme]);

  return (
    <div id="primary-color-demo-root" data-mantine-color-scheme={attr}>
      <NexProvider
        cssVariablesSelector="#primary-color-demo-root"
        getRootElement={() => document.createElement('div')}
        theme={{ primaryShade: props.primaryShade }}
      >
        <Group>
          <Button>Filled</Button>
          <Button variant="light">Light</Button>
          <Button variant="outline">Outline</Button>
        </Group>
      </NexProvider>
    </div>
  );
}

export const primaryShadeConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: 'number',
      prop: 'primaryShade',
      initialValue: 6,
      libraryValue: '__none__',
      min: 0,
      max: 9,
    },
  ],
};
