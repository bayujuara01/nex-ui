import { AreaChart } from '@nex-ui/charts';
import { MantineDemo } from '@nex-uix/demo';
import { biaxialData, biaxialDataCode } from './_data';

const code = `
import { AreaChart } from '@nex-ui/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="name"
      withRightYAxis
      yAxisLabel="uv"
      rightYAxisLabel="pv"
      series={[
        { name: 'uv', color: 'pink.6' },
        { name: 'pv', color: 'cyan.6', yAxisId: 'right' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <AreaChart
      h={300}
      data={biaxialData}
      dataKey="name"
      withRightYAxis
      yAxisLabel="uv"
      rightYAxisLabel="pv"
      series={[
        { name: 'uv', color: 'pink.6' },
        { name: 'pv', color: 'cyan.6', yAxisId: 'right' },
      ]}
    />
  );
}

export const rightYAxis: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: biaxialDataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
