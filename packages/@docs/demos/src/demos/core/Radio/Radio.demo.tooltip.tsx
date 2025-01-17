import { Radio, Tooltip } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Tooltip, Radio } from '@nex-ui/core';

function Demo() {
  return (
    <>
      <Tooltip label="Radio with tooltip">
        <Radio label="Tooltip on radio only" />
      </Tooltip>

      <Tooltip label="Radio with tooltip" refProp="rootRef">
        <Radio label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Tooltip label="Radio with tooltip">
        <Radio label="Tooltip on radio only" />
      </Tooltip>

      <Tooltip label="Radio with tooltip" refProp="rootRef">
        <Radio label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}

export const tooltip: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
