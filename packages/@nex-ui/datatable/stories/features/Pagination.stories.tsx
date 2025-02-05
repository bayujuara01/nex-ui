import { NexReactTable, type NexTableColumnDef } from '../../src';

import { faker } from '@faker-js/faker';
import { type Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Features/Pagination Examples',
};

export default meta;

const columns: NexTableColumnDef<(typeof data)[0]>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
];
const data = [...Array(333)].map(() => ({
  address: faker.location.streetAddress(),
  age: faker.number.int(80),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
}));

export const PaginationEnabledDefault = () => (
  <NexReactTable columns={columns} data={data} />
);

export const MantinePaginationEnabledDefault = () => (
  <NexReactTable
    columns={columns}
    data={data}
    paginationDisplayMode="pages"
  />
);

export const PaginationDisabledOrOverriden = () => (
  <NexReactTable columns={columns} data={data} enablePagination={false} />
);

export const PaginationPositionBottom = () => (
  <NexReactTable
    columns={columns}
    data={data}
    positionPagination="bottom"
  />
);

export const PaginationPositionTop = () => (
  <NexReactTable columns={columns} data={data} positionPagination="top" />
);

export const PaginationPositionTopAndBottom = () => (
  <NexReactTable columns={columns} data={data} positionPagination="both" />
);

export const PaginationPositionTopAndBottomNoInternalActions = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableToolbarInternalActions={false}
    positionPagination="both"
  />
);

export const PaginationHideRowsPerPageSwitcher = () => (
  <NexReactTable
    columns={columns}
    data={data}
    initialState={{ pagination: { pageIndex: 0, pageSize: 5 } }}
    mantinePaginationProps={{
      showRowsPerPage: false,
    }}
  />
);

export const CustomizePaginationComponents = () => (
  <NexReactTable
    columns={columns}
    data={data}
    initialState={{ pagination: { pageIndex: 0, pageSize: 5 } }}
    mantinePaginationProps={{
      rowsPerPageOptions: ['5', '10', '20'],
      withEdges: false,
    }}
  />
);
