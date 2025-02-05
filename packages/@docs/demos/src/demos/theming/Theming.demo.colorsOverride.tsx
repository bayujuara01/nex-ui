import { Button, Group } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Group, Button, NexProvider, createTheme } from '@nex-ui/core';

const theme = createTheme({
  colors: {
    'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
    'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
  },
});

function Demo() {
  return (
    <NexProvider theme={theme}>
      <Group>
        <Button color="ocean-blue">Ocean blue button</Button>
        <Button color="bright-pink" variant="filled">
          Bright pink button
        </Button>
      </Group>
    </NexProvider>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Button color="ocean-blue">Ocean blue button</Button>
      <Button color="bright-pink" variant="filled">
        Bright pink button
      </Button>
    </Group>
  );
}

export const colorsOverride: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
