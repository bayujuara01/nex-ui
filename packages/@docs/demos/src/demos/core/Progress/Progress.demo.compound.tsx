import { Progress } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Progress } from '@nex-ui/core';

function Demo() {
  return (
    <Progress.Root size="xl">
      <Progress.Section value={35} color="cyan">
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
      <Progress.Section value={28} color="pink">
        <Progress.Label>Photos</Progress.Label>
      </Progress.Section>
      <Progress.Section value={15} color="orange">
        <Progress.Label>Other</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}
`;

function Demo() {
  return (
    <Progress.Root size="xl">
      <Progress.Section value={35} color="cyan">
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
      <Progress.Section value={28} color="pink">
        <Progress.Label>Photos</Progress.Label>
      </Progress.Section>
      <Progress.Section value={15} color="orange">
        <Progress.Label>Other</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}

export const compound: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
