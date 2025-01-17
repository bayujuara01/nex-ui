import { Pagination } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';
import { PaginationStylesApi } from '@docs/styles-api';

const code = `
import { Pagination } from '@nex-ui/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`;

function Demo(props: any) {
  return <Pagination total={10} {...props} />;
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: PaginationStylesApi,
  component: Demo,
  code,
  centered: true,
};
