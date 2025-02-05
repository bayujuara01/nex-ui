import { createTheme, Input, NexThemeProvider, NativeSelect, TextInput } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import classes from './Input.demo.sharedStyles.module.css';

const code = `
import { TextInput, NativeSelect, NexProvider, createTheme, Input } from '@nex-ui/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({
      classNames: {
        input: classes.input,
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      classNames: {
        label: classes.label,
      },
    }),
  },
});

function Demo() {
  return (
    <NexProvider theme={theme}>
      <TextInput label="Text input" placeholder="Text input" />

      <NativeSelect
        mt="md"
        label="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </NexProvider>
  );
}
`;

const cssCode = `
.label {
  background-color: var(--mantine-color-blue-light);
}

.input {
  border: 1px solid var(--mantine-color-violet-filled);
}
`;

const theme = createTheme({
  components: {
    Input: Input.extend({
      classNames: {
        input: classes.input,
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      classNames: {
        label: classes.label,
      },
    }),
  },
});

function Demo() {
  return (
    <NexThemeProvider theme={theme}>
      <TextInput label="Text input" placeholder="Text input" />
      <NativeSelect mt="md" label="Native select" data={['React', 'Angular', 'Vue', 'Svelte']} />
    </NexThemeProvider>
  );
}

export const sharedStyles: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  maxWidth: 340,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
  ],
};
