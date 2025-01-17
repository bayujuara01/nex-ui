import { FileInput } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { FileInput } from '@nex-ui/core';

function Demo() {
  return <FileInput clearable label="Upload files" placeholder="Upload files" />;
}
`;

function Demo() {
  return <FileInput clearable label="Upload files" placeholder="Upload files" />;
}

export const clearable: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
};
