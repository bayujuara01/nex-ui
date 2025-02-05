import { Avatar, Indicator } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Avatar, Indicator } from '@nex-ui/core';

function Demo() {
  return (
    <Indicator inline processing color="red" size={12}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"
      />
    </Indicator>
  );
}
`;

function Demo() {
  return (
    <Indicator inline processing color="red" size={12}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"
      />
    </Indicator>
  );
}

export const processing: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
