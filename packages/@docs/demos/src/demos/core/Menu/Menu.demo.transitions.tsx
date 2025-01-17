import { Menu } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import { DemoMenuItems } from './_menu-items';

const code = `
import { Menu } from '@nex-ui/core';

function Demo() {
  return (
    <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
      {/* Menu content */}
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
      <DemoMenuItems />
    </Menu>
  );
}

export const transitions: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
