import { createTheme, Input, NexThemeProvider } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import classes from './Styles.demo.dataSize.module.css';

const code = `
import { Input, createTheme, NexProvider } from '@nex-ui/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <NexProvider theme={theme}>
      <Input placeholder="Size XXL" size="xxl" />
      <Input placeholder="Size XXS" size="xxs" mt="md" />
    </NexProvider>
  );
}
`;

const cssCode = `
.wrapper {
  &[data-size='xxl'] {
    & .input {
      padding-left: 28px;
      padding-right: 28px;
      height: 68px;
      font-size: 28px;
    }
  }

  &[data-size='xxs'] {
    & .input {
      padding-left: 10px;
      padding-right: 10px;
      height: 28px;
      font-size: 10px;
    }
  }
}
`;

const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <NexThemeProvider theme={theme}>
      <Input placeholder="Size XXL" size="xxl" />
      <Input placeholder="Size XXS" size="xxs" mt="md" />
    </NexThemeProvider>
  );
}

export const dataSize: MantineDemo = {
  type: 'code',
  component: Demo,
  maxWidth: 360,
  centered: true,
  code: [
    { language: 'tsx', code, fileName: 'Demo.tsx' },
    { language: 'scss', code: cssCode, fileName: 'Demo.module.css' },
  ],
};
