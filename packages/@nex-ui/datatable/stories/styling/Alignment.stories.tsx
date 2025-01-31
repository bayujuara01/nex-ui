import { NexReactTable, type NexTableColumnDef } from '../../src';

import { faker } from '@faker-js/faker';
import { type Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Styling/Table Alignment Examples',
};

export default meta;

const columns: NexTableColumnDef<(typeof data)[0]>[] = [
  {
    accessorKey: 'firstName',
    footer: 'First Name',
    header: 'First Name',
  },
  {
    accessorKey: 'lastName',
    footer: 'Last Name',
    header: 'Last Name',
  },
  {
    accessorKey: 'age',
    footer: 'Age',
    header: 'Age',
  },
  {
    accessorKey: 'address',
    footer: 'Address',
    header: 'Address',
  },
  {
    accessorKey: 'state',
    footer: 'State',
    header: 'State',
  },
  {
    accessorKey: 'phoneNumber',
    footer: 'Phone Number',
    header: 'Phone Number',
  },
];

const data = [...Array(25)].map(() => ({
  address: faker.location.streetAddress(),
  age: faker.number.int({ max: 60, min: 20 }),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
  state: faker.location.state(),
}));

export const DefaultLeft = () => (
  <NexReactTable columns={columns} data={data} />
);

export const DefaultLeftGrid = () => (
  <NexReactTable columns={columns} data={data} layoutMode="grid" />
);

export const RightCells = () => (
  <NexReactTable
    columns={columns}
    data={data}
    mantineTableBodyCellProps={{
      align: 'right',
    }}
    mantineTableFooterCellProps={{
      align: 'right',
    }}
    mantineTableHeadCellProps={{
      align: 'right',
    }}
  />
);

export const RightCellsGrid = () => (
  <NexReactTable
    columns={columns}
    data={data}
    layoutMode="grid"
    mantineTableBodyCellProps={{
      align: 'right',
    }}
    mantineTableFooterCellProps={{
      align: 'right',
    }}
    mantineTableHeadCellProps={{
      align: 'right',
    }}
  />
);

export const CenterCells = () => (
  <NexReactTable
    columns={columns}
    data={data}
    mantineTableBodyCellProps={{
      align: 'center',
    }}
    mantineTableFooterCellProps={{
      align: 'center',
    }}
    mantineTableHeadCellProps={{
      align: 'center',
    }}
  />
);

export const CenterCellsGrid = () => (
  <NexReactTable
    columns={columns}
    data={data}
    layoutMode="grid"
    mantineTableBodyCellProps={{
      align: 'center',
    }}
    mantineTableFooterCellProps={{
      align: 'center',
    }}
    mantineTableHeadCellProps={{
      align: 'center',
    }}
  />
);

export const CenterCellsWithGrabHandle = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableColumnDragging
    mantineTableBodyCellProps={{
      align: 'center',
    }}
    mantineTableFooterCellProps={{
      align: 'center',
    }}
    mantineTableHeadCellProps={{
      align: 'center',
    }}
  />
);

export const CenterCellsWithGrabHandleNoSorting = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableColumnDragging
    enableSorting={false}
    mantineTableBodyCellProps={{
      align: 'center',
    }}
    mantineTableFooterCellProps={{
      align: 'center',
    }}
    mantineTableHeadCellProps={{
      align: 'center',
    }}
  />
);

export const CenterCellsNoColumnActions = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableColumnActions={false}
    mantineTableBodyCellProps={{
      align: 'center',
    }}
    mantineTableFooterCellProps={{
      align: 'center',
    }}
    mantineTableHeadCellProps={{
      align: 'center',
    }}
  />
);

export const RightAlignNumberColumn = () => (
  <NexReactTable
    columns={[
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
        mantineTableBodyCellProps: {
          align: 'right',
        },
        mantineTableHeadCellProps: {
          align: 'right',
        },
      },
      {
        accessorKey: 'address',
        header: 'Address',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
      {
        accessorKey: 'phoneNumber',
        header: 'Phone Number',
      },
    ]}
    data={data}
  />
);
