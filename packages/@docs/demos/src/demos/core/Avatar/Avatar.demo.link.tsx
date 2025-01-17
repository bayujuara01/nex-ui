import { Avatar } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import { avatars } from './_mockdata';

const code = `
import { Avatar } from '@nex-ui/core';

function Demo() {
  return (
    <Avatar
      component="a"
      href="https://github.com/rtivital"
      target="_blank"
      src="avatar.png"
      alt="it's me"
    />
  );
}
`;

function Demo() {
  return (
    <Avatar
      component="a"
      href="https://github.com/rtivital"
      target="_blank"
      src={avatars[0]}
      alt="it's me"
    />
  );
}

export const link: MantineDemo = {
  type: 'code',
  centered: true,
  code,
  component: Demo,
};
