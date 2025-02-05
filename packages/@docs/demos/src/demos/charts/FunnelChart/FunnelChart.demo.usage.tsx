import { FunnelChart } from '@nex-ui/charts';
import { MantineDemo } from '@nex-uix/demo';
import { data, dataCode } from './_data';

const code = `
import { FunnelChart } from '@nex-ui/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart data={data} />;
}
`;

function Demo() {
  return <FunnelChart data={data} />;
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
