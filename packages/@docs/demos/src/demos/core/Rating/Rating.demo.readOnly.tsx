import { Rating } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Rating } from '@nex-ui/core';

function Demo() {
  return <Rating value={3.5} fractions={2} readOnly />;
}
`;

function Demo() {
  return <Rating value={3.5} fractions={2} readOnly />;
}

export const readOnly: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
