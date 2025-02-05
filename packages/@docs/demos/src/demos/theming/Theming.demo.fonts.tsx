import { Button, Code, Group, Title } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Button, Code, Title, NexProvider, createTheme } from '@nex-ui/core';

const theme = createTheme({
  fontFamily: 'Verdana, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Greycliff CF, sans-serif' },
});

function Demo() {
  return (
    <NexProvider theme={theme}>
      <Title order={3}>Greycliff CF or sans-serif title</Title>
      <Button>Verdana button</Button>
      <Code>Monaco, Courier Code</Code>
    </NexProvider>
  );
}
`;

function Demo() {
  return (
    <>
      <Title order={3} ff="Greycliff CF, sans-serif" ta="center">
        Greycliff CF title
      </Title>
      <Group mt="md">
        <Button ff="Verdana, sans-serif">Verdana button</Button>
        <Code ff="Monaco, Courier, monospace">Monaco, Courier Code</Code>
      </Group>
    </>
  );
}

export const fonts: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
