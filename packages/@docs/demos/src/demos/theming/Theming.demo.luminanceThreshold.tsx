import {
  Button,
  DEFAULT_THEME,
  NexThemeProvider,
  parseThemeColor,
  Stack,
  useNexTheme,
} from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = (props: Record<string, any>) => `
import { Button, createTheme, NexProvider, Stack } from '@nex-ui/core';

const theme = createTheme({
  autoContrast: true,
  luminanceThreshold: ${props.luminanceThreshold},
});

function Wrapper(props: any) {
  const buttons = Array(10)
    .fill(0)
    .map((_, index) => (
      <Button
        key={index}
        color=${
          parseThemeColor({ theme: DEFAULT_THEME, color: props.color }).isThemeColor
            ? `{\`${props.color}.\${index}\`}`
            : `"${props.color}"`
        }
      >
        Button
      </Button>
    ));

  return (
    <NexProvider theme={theme}>
      <Stack>{buttons}</Stack>
    </NexProvider>
  );
}
`;

function Wrapper(props: any) {
  const theme = useNexTheme();

  const buttons = Array(10)
    .fill(0)
    .map((_, index) => (
      <Button
        key={index}
        color={
          parseThemeColor({ theme, color: props.color }).isThemeColor
            ? `${props.color}.${index}`
            : props.color
        }
      >
        Button
      </Button>
    ));

  return (
    <NexThemeProvider
      inherit
      theme={{
        autoContrast: true,
        luminanceThreshold: props.luminanceThreshold,
      }}
    >
      <Stack>{buttons}</Stack>
    </NexThemeProvider>
  );
}

export const luminanceThreshold: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { type: 'color', prop: 'color', initialValue: 'blue', libraryValue: null },
    {
      type: 'number',
      prop: 'luminanceThreshold',
      initialValue: 0.3,
      min: 0,
      max: 1,
      step: 0.01,
      libraryValue: '__',
    },
  ],
};
