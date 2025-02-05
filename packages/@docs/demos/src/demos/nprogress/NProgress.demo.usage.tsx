import { Button, Group } from '@nex-ui/core';
import { NavigationProgress, nprogress } from '@nex-ui/nprogress';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Button, Group } from '@nex-ui/core';
import { nprogress, NavigationProgress } from '@nex-ui/nprogress';

function Demo() {
  return (
    <>
      <NavigationProgress />
      <Group justify="center">
        <Button onClick={() => nprogress.start()}>Start</Button>
        <Button onClick={() => nprogress.stop()}>Stop</Button>
        <Button onClick={() => nprogress.increment()}>Increment</Button>
        <Button onClick={() => nprogress.decrement()}>Decrement</Button>
        <Button onClick={() => nprogress.set(50)}>Set 50%</Button>
        <Button onClick={() => nprogress.reset()}>Reset</Button>
        <Button onClick={() => nprogress.complete()}>Complete</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <NavigationProgress />
      <Group justify="center">
        <Button onClick={() => nprogress.start()} variant="default">
          Start
        </Button>
        <Button onClick={() => nprogress.stop()} variant="default">
          Stop
        </Button>
        <Button onClick={() => nprogress.increment()} variant="default">
          Increment
        </Button>
        <Button onClick={() => nprogress.decrement()} variant="default">
          Decrement
        </Button>
        <Button onClick={() => nprogress.set(50)} variant="default">
          Set 50%
        </Button>
        <Button onClick={() => nprogress.reset()} variant="default">
          Reset
        </Button>
        <Button onClick={() => nprogress.complete()} variant="default">
          Complete
        </Button>
      </Group>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
