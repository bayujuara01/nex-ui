import { TagsInput } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { TagsInput } from '@nex-ui/core';

function Demo() {
  return <TagsInput label="Press Enter to submit a tag" placeholder="Enter tag" />;
}
`;

function Demo() {
  return <TagsInput label="Press Enter to submit a tag" placeholder="Enter tag" />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
