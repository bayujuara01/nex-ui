import { Box, Checkbox, TextInput } from '@nex-ui/core';
import { useForm } from '@nex-ui/form';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useForm } from '@nex-ui/form';
import { Box, Checkbox, TextInput } from '@nex-ui/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      terms: false,
      user: {
        firstName: '',
        lastName: '',
      },
    },
  });

  return (
    <Box maw={340} mx="auto">
      <TextInput
        label="First name"
        placeholder="First name"
        key={form.key('user.firstName')}
        {...form.getInputProps('user.firstName')}
      />
      <TextInput
        label="Last name"
        placeholder="Last name"
        mt="md"
        key={form.key('user.lastName')}
        {...form.getInputProps('user.lastName')}
      />
      <Checkbox
        label="I accepts terms & conditions"
        mt="sm"
        key={form.key('terms')}
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
    </Box>
  );
}
`;

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      terms: false,
      user: {
        firstName: '',
        lastName: '',
      },
    },
  });

  return (
    <Box maw={340} mx="auto">
      <TextInput
        label="First name"
        placeholder="First name"
        key={form.key('user.firstName')}
        {...form.getInputProps('user.firstName')}
      />
      <TextInput
        label="Last name"
        placeholder="Last name"
        mt="md"
        key={form.key('user.lastName')}
        {...form.getInputProps('user.lastName')}
      />
      <Checkbox
        label="I accepts terms & conditions"
        mt="sm"
        key={form.key('terms')}
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
    </Box>
  );
}

export const nested: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
