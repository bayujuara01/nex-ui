import { IMaskInput } from 'react-imask';
import { Input } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Input } from '@nex-ui/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return <Input component={IMaskInput} mask="+7 (000) 000-00-00" placeholder="Your phone" />;
}
`;

function Demo() {
  return <Input component={IMaskInput} mask="+7 (000) 000-00-00" placeholder="Your phone" />;
}

export const mask: MantineDemo = {
  type: 'code',
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
