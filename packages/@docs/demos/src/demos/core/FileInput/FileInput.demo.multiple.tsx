import { FileInput } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { FileInput } from '@nex-ui/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" multiple />;
}
`;

function Demo() {
  return <FileInput multiple label="Upload files" placeholder="Upload files" />;
}

export const multiple: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
};
