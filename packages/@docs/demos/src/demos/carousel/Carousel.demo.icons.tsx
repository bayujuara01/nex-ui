import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { Carousel } from '@nex-ui/carousel';
import { rem } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import { Slides } from './_slides';

const code = `
import { rem } from '@nex-ui/core';
import { Carousel } from '@nex-ui/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    <Carousel
      height={180}
      nextControlIcon={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
      previousControlIcon={<IconArrowLeft style={{ width: rem(16), height: rem(16) }} />}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`;

function Demo() {
  return (
    <Carousel
      height={180}
      nextControlIcon={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
      previousControlIcon={<IconArrowLeft style={{ width: rem(16), height: rem(16) }} />}
    >
      <Slides count={5} />
    </Carousel>
  );
}

export const icons: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 320,
};
