import { useMemo } from 'react';
import { Button, Group } from '@nex-ui/core';
import { createSpotlight, Spotlight, SpotlightProps } from '@nex-ui/spotlight';

export function SpotlightDemoBase(props: Partial<SpotlightProps>) {
  const [store, actions] = useMemo(createSpotlight, []);
  return (
    <>
      <Group justify="center">
        <Button onClick={actions.open}>Open spotlight</Button>
      </Group>
      <Spotlight actions={[]} store={store} {...props} />
    </>
  );
}
