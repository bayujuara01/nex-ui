import { DonutChart } from '@nex-ui/charts';
import { MantineDemo } from '@nex-uix/demo';
import { data, dataCode } from './_data';

const code = `
import { DonutChart } from '@nex-ui/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} startAngle={180} endAngle={0} />;
}
`;

function Demo() {
  return <DonutChart data={data} startAngle={180} endAngle={0} />;
}

export const angle: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
  centered: true,
};
