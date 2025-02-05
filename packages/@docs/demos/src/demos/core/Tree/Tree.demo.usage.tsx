import { Tree } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import { data, dataCode } from './data';

const code = `
import { Tree } from '@nex-ui/core';
import { data } from './data';

function Demo() {
  return <Tree data={data} />;
}
`;

function Demo() {
  return <Tree data={data} />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
};
