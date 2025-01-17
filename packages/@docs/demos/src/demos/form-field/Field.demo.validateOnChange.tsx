import { TextInput } from '@nex-ui/core';
import { isEmail, useField } from '@nex-ui/form';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { TextInput } from '@nex-ui/core';
import { useField, isEmail } from '@nex-ui/form';

function Demo() {
  const field = useField({
    initialValue: '',
    validateOnChange: true,
    validate: isEmail('Invalid email'),
  });

  return <TextInput {...field.getInputProps()} label="Email" placeholder="Enter your email" />;
}
`;

function Demo() {
  const field = useField({
    initialValue: '',
    validateOnChange: true,
    validate: isEmail('Invalid email'),
  });

  return <TextInput {...field.getInputProps()} label="Email" placeholder="Enter your email" />;
}

export const validateOnChange: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
