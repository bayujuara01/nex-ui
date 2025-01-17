import { FunnelChart } from '@nex-ui/charts';
import { Center } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import { data, dataCode } from './_data';

const code = `
import { FunnelChart } from '@nex-ui/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart{{props}} data={data} />;
}
`;

function Wrapper(props: any) {
  return (
    <Center mih={300}>
      <FunnelChart {...props} data={data} />
    </Center>
  );
}

export const size: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
  centered: true,
  controls: [
    {
      type: 'number',
      prop: 'size',
      initialValue: 160,
      min: 80,
      max: 300,
      step: 1,
      libraryValue: '__',
    },
  ],
};
