import { Checkbox, createTheme, NexThemeProvider } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { NexProvider, createTheme, Checkbox } from '@nex-ui/core';

const theme = createTheme({
  cursorType: 'pointer',
});

function Demo() {
  return (
    <>
      <Checkbox label="Default cursor" />

      <NexProvider theme={theme}>
        <Checkbox label="Pointer cursor" mt="md" />
      </NexProvider>
    </>
  );
}
`;

const theme = createTheme({
  cursorType: 'pointer',
});

function Demo() {
  return (
    <>
      <Checkbox label="Default cursor" />

      <NexThemeProvider theme={theme}>
        <Checkbox
          label="Pointer cursor"
          mt="md"
          styles={{ input: { cursor: 'pointer' }, label: { cursor: 'pointer' } }}
        />
      </NexThemeProvider>
    </>
  );
}

export const cursorType: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
