import { NexReactTable, type NexTableColumnDef } from '../../src';

import { faker } from '@faker-js/faker';
import { type Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Features/Column Pinning Examples',
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
    accessorKey: 'email',
    header: 'Email Address',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
  {
    accessorKey: 'state',
    header: 'State',
  },
];

const data = [...Array(100)].map(() => ({
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  email: faker.internet.email(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  state: faker.location.state(),
}));

export const ColumnPinningEnabled = () => (
  <NexReactTable columns={columns} data={data} enableColumnPinning />
);

export const ColumnPinningInitial = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableColumnPinning
    initialState={{ columnPinning: { left: ['email'], right: ['state'] } }}
  />
);

export const ColumnPinningDisabledPerColumn = () => (
  <NexReactTable
    columns={[
      {
        accessorKey: 'firstName',
        enableColumnPinning: false,
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'email',
        header: 'Email Address',
      },
      {
        accessorKey: 'address',
        header: 'Address',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
    ]}
    data={data}
    enableColumnPinning
  />
);

export const ColumnPinningWithSelect = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableColumnPinning
    enableRowSelection
  />
);

export const ColumnPinningWithDetailPanel = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableColumnPinning
    enableExpanding
    renderDetailPanel={({ row: _row }) => <h1>Hi</h1>}
  />
);
