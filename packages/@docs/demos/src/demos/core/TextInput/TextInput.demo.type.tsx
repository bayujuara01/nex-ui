import { TextInput } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { TextInput } from '@nex-ui/core';

function Demo() {
  return (
    <>
      <TextInput type="password" label="Password input" placeholder="Password input" />
      <TextInput mt="md" type="date" label="Date input" placeholder="Date input" />
      <TextInput
        mt="md"
        type="datetime-local"
        label="Date time input"
        placeholder="Date time input"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <TextInput type="password" label="Password input" placeholder="Password input" />
      <TextInput mt="md" type="date" label="Date input" placeholder="Date input" />
      <TextInput
        mt="md"
        type="datetime-local"
        label="Date time input"
        placeholder="Date time input"
      />
    </>
  );
}

export const type: MantineDemo = {
  type: 'code',
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
