import { Button, TextInput } from '@nex-ui/core';
import { useField } from '@nex-ui/form';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Button, TextInput } from '@nex-ui/core';
import { useField } from '@nex-ui/form';

function Demo() {
  const field = useField({
    mode: 'uncontrolled',
    initialValue: '',
    validate: (value) => (value.trim().length < 2 ? 'Value is too short' : null),
  });

  return (
    <>
      <TextInput
        {...field.getInputProps()}
        key={field.key}
        label="Name"
        placeholder="Enter your name"
        mb="md"
      />
      <Button onClick={field.validate}>Validate</Button>
    </>
  );
}
`;

function Demo() {
  const field = useField({
    mode: 'uncontrolled',
    initialValue: '',
    validate: (value) => (value.trim().length < 2 ? 'Value is too short' : null),
  });

  return (
    <>
      <TextInput
        {...field.getInputProps()}
        key={field.key}
        label="Name"
        placeholder="Enter your name"
        mb="md"
      />
      <Button onClick={field.validate}>Validate</Button>
    </>
  );
}

export const uncontrolled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
