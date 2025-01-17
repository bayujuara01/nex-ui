import { MantineDemo } from '@nex-uix/demo';
import { Wrapper } from './_wrapper';

const code = `
import { Spoiler } from '@nex-ui/core';

function Demo() {
  return (
    <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
      {/* Content here */}
    </Spoiler>
  );
}
`;

function Demo() {
  return <Wrapper />;
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
