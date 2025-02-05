import { Input } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Input } from '@nex-ui/core';

function Demo() {
  return (
    <>
      <Input.Label required>Input label</Input.Label>
      <Input.Description>Input description</Input.Description>
      <Input.Error>Input error</Input.Error>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Input.Label required>Input label</Input.Label>
      <Input.Description>Input description</Input.Description>
      <Input.Error>Input error</Input.Error>
    </>
  );
}

export const compound: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
