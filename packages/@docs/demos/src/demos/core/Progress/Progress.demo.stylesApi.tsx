import { Progress } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import { ProgressStylesApi } from '@docs/styles-api';

const code = `
import { Progress } from '@nex-ui/core';

function Demo() {
  return (
    <Progress.Root size="xl"{{props}}>
      <Progress.Section value={35}>
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}
`;

function Demo(props: any) {
  return (
    <Progress.Root size="xl" {...props}>
      <Progress.Section value={35}>
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: ProgressStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 400,
};
