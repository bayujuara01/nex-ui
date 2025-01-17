import { LineChart } from '@nex-ui/charts';
import { MantineDemo } from '@nex-uix/demo';
import { data, dataCode } from './_data';

const code = (props: Record<string, any>) => `
import { LineChart } from '@nex-ui/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[{ name: 'Apples', color: '${props.color}' }]}
    />
  );
}
`;

function Wrapper(props: any) {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[{ name: 'Apples', color: props.color }]}
      {...props}
    />
  );
}

export const color: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
  controls: [
    {
      type: 'color',
      prop: 'color',
      initialValue: 'blue',
      libraryValue: true,
    },
  ],
};
