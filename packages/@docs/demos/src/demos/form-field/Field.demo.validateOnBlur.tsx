import { TextInput } from '@nex-ui/core';
import { useField } from '@nex-ui/form';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { TextInput } from '@nex-ui/core';
import { useField } from '@nex-ui/form';

function Demo() {
  const field = useField({
    initialValue: '',
    validateOnBlur: true,
    validate: (value) => (value.trim().length < 2 ? 'Value is too short' : null),
  });

  return <TextInput {...field.getInputProps()} label="Name" placeholder="Enter your name" />;
}
`;

function Demo() {
  const field = useField({
    initialValue: '',
    validateOnBlur: true,
    validate: (value) => (value.trim().length < 2 ? 'Value is too short' : null),
  });

  return <TextInput {...field.getInputProps()} label="Name" placeholder="Enter your name" />;
}

export const validateOnBlur: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
