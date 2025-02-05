import { Anchor, Checkbox } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Checkbox, Anchor } from '@nex-ui/core';

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://google.com" target="_blank" inherit>
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}
`;

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://google.com" target="_blank" inherit>
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}

export const anchor: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
