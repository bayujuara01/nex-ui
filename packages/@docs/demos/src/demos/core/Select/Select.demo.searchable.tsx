import { Select } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Select } from '@nex-ui/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
    />
  );
}
`;

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
    />
  );
}

export const searchable: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
