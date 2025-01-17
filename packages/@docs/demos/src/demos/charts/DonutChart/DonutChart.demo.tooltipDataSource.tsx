import { DonutChart } from '@nex-ui/charts';
import { Group, Text } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import { data, dataCode } from './_data';

const code = `
import { Group, Text } from '@nex-ui/core';
import { DonutChart } from '@nex-ui/charts';
import { data } from './data';

function Demo() {
  return (
    <Group gap={50}>
      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for hovered segment
        </Text>
        <DonutChart data={data} tooltipDataSource="segment" mx="auto" />
      </div>

      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for all segments
        </Text>
        <DonutChart data={data} mx="auto" />
      </div>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group gap={50}>
      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for hovered segment
        </Text>
        <DonutChart data={data} tooltipDataSource="segment" mx="auto" />
      </div>

      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for all segments
        </Text>
        <DonutChart data={data} mx="auto" />
      </div>
    </Group>
  );
}

export const tooltipDataSource: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
  centered: true,
};
