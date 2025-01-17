import { Badge } from '@nex-ui/core';
import { useColorScheme } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Badge } from '@nex-ui/core';
import { useColorScheme } from '@nex-ui/hooks';

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}`;

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}

export const useColorSchemeDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
