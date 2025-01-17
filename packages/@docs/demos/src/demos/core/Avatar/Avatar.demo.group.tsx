import { Avatar } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import { avatars } from './_mockdata';

const code = `
import { Avatar } from '@nex-ui/core';

function Demo() {
  return (
    <Avatar.Group>
      <Avatar src="image.png" />
      <Avatar src="image.png" />
      <Avatar src="image.png" />
      <Avatar>+5</Avatar>
    </Avatar.Group>
  );
}
`;

function Demo() {
  return (
    <Avatar.Group>
      <Avatar src={avatars[0]} />
      <Avatar src={avatars[1]} />
      <Avatar src={avatars[2]} />
      <Avatar>+5</Avatar>
    </Avatar.Group>
  );
}

export const group: MantineDemo = {
  type: 'code',
  centered: true,
  code,
  component: Demo,
};
