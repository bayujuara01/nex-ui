import { Select } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Select } from '@nex-ui/core';


function Demo() {
  return (
    <Select
      {{props}}
      data={['React', 'Angular', 'Svelte', 'Vue']}
      dropdownOpened
      pb={150}
      label="Control check icon"
      placeholder="Pick value"
      defaultValue="React"
    />
  );
}
`;

function Wrapper(props: any) {
  return (
    <Select
      {...props}
      data={['React', 'Angular', 'Svelte', 'Vue']}
      dropdownOpened
      pb={150}
      label="Control check icon"
      placeholder="Pick value"
      defaultValue="React"
    />
  );
}

export const checkIcon: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: [
    { type: 'boolean', prop: 'withCheckIcon', initialValue: true, libraryValue: true },
    {
      type: 'segmented',
      prop: 'checkIconPosition',
      initialValue: 'left',
      libraryValue: null,
      data: ['left', 'right'],
    },
  ],
};
