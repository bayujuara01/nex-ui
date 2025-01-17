import { Badge } from '@nex-ui/core';
import { useReducedMotion } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Badge } from '@nex-ui/core';
import { useReducedMotion } from '@nex-ui/hooks';

function Demo() {
  const reduceMotion = useReducedMotion();

  return (
    <Badge
      color={reduceMotion ? 'red' : 'teal'}
      style={{ transitionDuration: reduceMotion ? '0ms' : '200ms' }}
      variant="filled"
    >
      {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
    </Badge>
  );
}`;

function Demo() {
  const reduceMotion = useReducedMotion();
  return (
    <Badge
      color={reduceMotion ? 'red' : 'teal'}
      style={{ transitionDuration: reduceMotion ? '0ms' : '200ms' }}
      variant="filled"
    >
      {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
    </Badge>
  );
}

export const useReducedMotionDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
