import { RadialBarChart } from '@nex-ui/charts';
import { MantineDemo } from '@nex-uix/demo';
import { data, dataCode } from './_data';

const code = `
import { RadialBarChart } from '@nex-ui/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} withLegend />;
}
`;

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={260} withLegend />;
}

export const legend: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
};
