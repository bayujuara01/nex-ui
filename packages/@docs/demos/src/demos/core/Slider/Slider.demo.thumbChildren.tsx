import { IconHeart, IconHeartBroken } from '@tabler/icons-react';
import { RangeSlider, rem, Slider } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Slider, RangeSlider, rem } from '@nex-ui/core';
import { IconHeart, IconHeartBroken } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Slider
        thumbChildren={<IconHeart size="1rem" />}
        color="red"
        label={null}
        defaultValue={40}
        thumbSize={26}
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
      />

      <RangeSlider
        mt="xl"
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
        color="red"
        label={null}
        defaultValue={[20, 60]}
        thumbSize={26}
        thumbChildren={[<IconHeart size="1rem" key="1" />, <IconHeartBroken size="1rem" key="2" />]}
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Slider
        thumbChildren={<IconHeart size="1rem" stroke={1.5} />}
        color="red"
        label={null}
        defaultValue={40}
        thumbSize={26}
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
      />

      <RangeSlider
        mt="xl"
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
        color="red"
        label={null}
        defaultValue={[20, 60]}
        thumbSize={26}
        thumbChildren={[
          <IconHeart size="1rem" stroke={1.5} key="1" />,
          <IconHeartBroken size="1rem" stroke={1.5} key="2" />,
        ]}
      />
    </>
  );
}

export const thumbChildren: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 400,
  centered: true,
};
