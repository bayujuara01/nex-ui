import { NexReactTable, type NexTableColumnDef } from '../../src';

import { faker } from '@faker-js/faker';
import { type Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Features/Header Groups Examples',
};

export default meta;

const columns: NexTableColumnDef<(typeof data)[0]>[] = [
  {
    columns: [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },

      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
    ],
    header: 'Name',
    id: 'name',
  },
  {
    columns: [
      {
        accessorKey: 'age',
        header: 'Age',
      },
      {
        accessorKey: 'address',
        header: 'Address',
      },
    ],
    header: 'Info',
    id: 'info',
  },
];

const data = [...Array(55)].map(() => ({
  address: faker.location.streetAddress(),
  age: faker.number.int(80),
  city: faker.location.city(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  state: faker.location.state(),
}));

export const HeaderGroups = () => (
  <NexReactTable columns={columns} data={data} />
);

export const HeaderGroupsWithStickyHeader = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableStickyHeader
    initialState={{ pagination: { pageIndex: 0, pageSize: 25 } }}
  />
);

export const HeaderAndFooterGroups = () => (
  <NexReactTable
    columns={[
      {
        columns: [
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
        ],
        footer: 'Name',
        header: 'Name',
        id: 'name',
      },
      {
        columns: [
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
        ],
        footer: 'Info',
        header: 'Info',
        id: 'info',
      },
    ]}
    data={data}
    enableColumnPinning
  />
);

export const HeaderGroupsWithColumnOrdering = () => (
  <NexReactTable columns={columns} data={data} enableColumnOrdering />
);

export const HeaderGroupsWithColumnPinning = () => (
  <NexReactTable columns={columns} data={data} enableColumnPinning />
);

export const HeaderGroupsWithColumResizing = () => (
  <NexReactTable columns={columns} data={data} enableColumnResizing />
);

export const MixedHeaderGroups = () => {
  return (
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
          columns: [
            {
              accessorKey: 'address',
              header: 'Address',
            },
          ],
          header: 'Grouped',
          id: 'grouped',
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
    />
  );
};

export const DeepMixedHeaderGroups = () => {
  return (
    <NexReactTable
      columns={[
        {
          accessorKey: 'firstName',
          header: 'First Name',
        },
        {
          columns: [
            {
              columns: [
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
              ],
              header: 'Location',
              id: 'location',
            },
          ],
          header: 'Grouped',
          id: 'grouped',
        },
        {
          accessorKey: 'lastName',
          header: 'Last Name',
        },
      ]}
      data={data}
    />
  );
};
