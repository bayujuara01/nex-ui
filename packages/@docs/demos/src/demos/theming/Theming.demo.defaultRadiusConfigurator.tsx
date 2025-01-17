import { Button, TextInput } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = (props: Record<string, any>) => `
import { NexProvider, TextInput, Button } from '@nex-ui/core';

function Demo() {
  return (
    <NexProvider theme={{ defaultRadius: '${props.defaultRadius}' }}>
      <Button fullWidth>Button with defaultRadius</Button>
      <TextInput mt="sm" label="TextInput with defaultRadius" placeholder="TextInput with default radius" />
    </NexProvider>
  );
}
`;

function Wrapper(props: any) {
  return (
    <>
      <Button radius={props.defaultRadius} fullWidth>
        Button with defaultRadius
      </Button>
      <TextInput
        mt="sm"
        radius={props.defaultRadius}
        label="TextInput with defaultRadius"
        placeholder="TextInput with default radius"
      />
    </>
  );
}

export const defaultRadiusConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [{ type: 'size', prop: 'defaultRadius', initialValue: 'sm', libraryValue: '__none__' }],
};
