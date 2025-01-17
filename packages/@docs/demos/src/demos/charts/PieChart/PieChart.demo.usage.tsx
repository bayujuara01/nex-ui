import { PieChart } from '@nex-ui/charts';
import { MantineDemo } from '@nex-uix/demo';
import { data, dataCode } from './_data';

const code = `
import { PieChart } from '@nex-ui/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} />;
}
`;

function Demo() {
  return <PieChart data={data} />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
  centered: true,
};
