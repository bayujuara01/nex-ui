import { TagsInput } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { TagsInput } from '@nex-ui/core';

function Demo() {
  return (
    <TagsInput
      label="Read only"
      placeholder="Enter tag"
      readOnly
      defaultValue={['First', 'Second']}
    />
  );
}
`;

function Demo() {
  return (
    <TagsInput
      label="Read only"
      placeholder="Enter tag"
      readOnly
      defaultValue={['First', 'Second']}
    />
  );
}

export const readOnly: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
