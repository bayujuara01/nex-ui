import { createTheme, NexThemeProvider, useProps } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useProps, NexThemeProvider, createTheme } from '@nex-ui/core';

interface CustomComponentProps {
  color?: string;
  children?: React.ReactNode;
}

const defaultProps: Partial<CustomComponentProps> = {
  color: 'red',
};

function CustomComponent(props: CustomComponentProps) {
  const { color, children } = useProps('CustomComponent', defaultProps, props);
  return <div style={{ color }}>{children}</div>;
}

const theme = createTheme({
  components: {
    CustomComponent: {
      defaultProps: {
        color: 'green',
      },
    },
  },
});

function Demo() {
  return (
    <div>
      <CustomComponent>Default color</CustomComponent>

      <NexThemeProvider theme={theme}>
        <CustomComponent>Provider color</CustomComponent>
        <CustomComponent color="blue">Prop color</CustomComponent>
      </NexThemeProvider>
    </div>
  );
}
`;

interface CustomComponentProps {
  color?: string;
  children?: React.ReactNode;
}

const defaultProps: Partial<CustomComponentProps> = {
  color: 'red',
};

function CustomComponent(props: CustomComponentProps) {
  const { color, children } = useProps('CustomComponent', defaultProps, props);
  return <div style={{ color }}>{children}</div>;
}

const theme = createTheme({
  components: {
    CustomComponent: {
      defaultProps: {
        color: 'green',
      },
    },
  },
});

function Demo() {
  return (
    <div>
      <CustomComponent>Default color</CustomComponent>

      <NexThemeProvider theme={theme}>
        <CustomComponent>Provider color</CustomComponent>
        <CustomComponent color="blue">Prop color</CustomComponent>
      </NexThemeProvider>
    </div>
  );
}

export const usePropsHook: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
