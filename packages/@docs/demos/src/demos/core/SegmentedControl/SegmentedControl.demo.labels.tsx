import { IconCode, IconExternalLink, IconEye } from '@tabler/icons-react';
import { Center, rem, SegmentedControl } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Center, SegmentedControl, rem } from '@nex-ui/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <Center style={{ gap: 10 }}>
              <IconEye style={{ width: rem(16), height: rem(16) }} />
              <span>Preview</span>
            </Center>
          ),
        },
        {
          value: 'code',
          label: (
            <Center style={{ gap: 10 }}>
              <IconCode style={{ width: rem(16), height: rem(16) }} />
              <span>Code</span>
            </Center>
          ),
        },
        {
          value: 'export',
          label: (
            <Center style={{ gap: 10 }}>
              <IconExternalLink style={{ width: rem(16), height: rem(16) }} />
              <span>Export</span>
            </Center>
          ),
        },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <Center style={{ gap: 10 }}>
              <IconEye style={{ width: rem(16), height: rem(16) }} />
              <span>Preview</span>
            </Center>
          ),
        },
        {
          value: 'code',
          label: (
            <Center style={{ gap: 10 }}>
              <IconCode style={{ width: rem(16), height: rem(16) }} />
              <span>Code</span>
            </Center>
          ),
        },
        {
          value: 'export',
          label: (
            <Center style={{ gap: 10 }}>
              <IconExternalLink style={{ width: rem(16), height: rem(16) }} />
              <span>Export</span>
            </Center>
          ),
        },
      ]}
    />
  );
}

export const labels: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
