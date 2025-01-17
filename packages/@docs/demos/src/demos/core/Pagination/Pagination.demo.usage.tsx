import { Pagination } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

function Demo() {
  return <Pagination total={10} />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
};
