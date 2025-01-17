import { MantineDemo } from '@nex-uix/demo';
import { BaseDemo } from './_base';

const code = `
import { Dropzone } from '@nex-ui/dropzone';

function Demo() {
  return (
    <Dropzone loading onDrop={() => {}}>
      {/* children */}
    </Dropzone>
  );
}
`;

function Demo() {
  return <BaseDemo loading />;
}

export const loading: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
