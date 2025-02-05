import { JsonInput } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { JsonInput } from '@nex-ui/core';

function Demo() {
  return (
    <JsonInput
      label="Your package.json"
      placeholder="Textarea will autosize to fit the content"
      validationError="Invalid JSON"
      formatOnBlur
      autosize
      minRows={4}
    />
  );
}
`;

function Demo() {
  return (
    <JsonInput
      maw={400}
      mx="auto"
      label="Your package.json"
      placeholder="Textarea will autosize to fit the content"
      validationError="Invalid JSON"
      formatOnBlur
      autosize
      minRows={4}
    />
  );
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
