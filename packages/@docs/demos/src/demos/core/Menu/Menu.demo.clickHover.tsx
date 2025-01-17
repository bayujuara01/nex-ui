import { Menu } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import { DemoMenuItems } from './_menu-items';

const code = `
import { Menu } from '@nex-ui/core';

function Demo() {
  return (
    <Menu trigger="click-hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Menu trigger="click-hover" openDelay={100} closeDelay={400}>
      <DemoMenuItems />
    </Menu>
  );
}

export const clickHover: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
