import { Menu } from '@nex-ui/core';

import { NexReactTable, type NexTableColumnDef } from '../../src';

import { faker } from '@faker-js/faker';
import { type Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Features/Column Action Examples',
};

export default meta;

interface Row {
  address: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  state: string;
}

const columns: NexTableColumnDef<Row>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
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
];

const data: Row[] = [...Array(100)].map(() => ({
  address: faker.location.streetAddress(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
  state: faker.location.state(),
}));

export const ColumnActionsEnabledDefault = () => (
  <NexReactTable columns={columns} data={data} />
);

export const ColumnActionsDisabled = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableColumnActions={false}
  />
);

export const ColumnActionsDisabledPerColumn = () => (
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
        accessorKey: 'address',
        enableColumnActions: false,
        header: 'Address',
      },
      {
        accessorKey: 'state',
        enableColumnActions: false,
        header: 'State',
      },
      {
        accessorKey: 'phoneNumber',
        enableColumnActions: false,
        header: 'Phone Number',
      },
    ]}
    data={data}
  />
);

export const ColumnActionsEnabledPerColumn = () => (
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
        accessorKey: 'address',
        enableColumnActions: true,
        header: 'Address',
      },
      {
        accessorKey: 'state',
        enableColumnActions: true,
        header: 'State',
      },
      {
        accessorKey: 'phoneNumber',
        enableColumnActions: true,
        header: 'Phone Number',
      },
    ]}
    data={data}
    enableColumnActions={false}
  />
);

export const CustomColumnActions = () => (
  <NexReactTable
    columns={columns}
    data={data}
    renderColumnActionsMenuItems={() => (
      <>
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
      </>
    )}
  />
);

export const CustomColumnActionsPerColumn = () => (
  <NexReactTable
    columns={[
      {
        accessorKey: 'firstName',
        header: 'First Name',
        renderColumnActionsMenuItems: () => (
          <>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
          </>
        ),
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        renderColumnActionsMenuItems: () => (
          <>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
          </>
        ),
      },
      {
        accessorKey: 'address',
        enableColumnActions: true,
        header: 'Address',
        renderColumnActionsMenuItems: ({ internalColumnMenuItems }) => (
          <>
            {internalColumnMenuItems}
            <Menu.Divider />
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
          </>
        ),
      },
      {
        accessorKey: 'state',
        enableColumnActions: true,
        header: 'State',
      },
      {
        accessorKey: 'phoneNumber',
        enableColumnActions: true,
        header: 'Phone Number',
      },
    ]}
    data={data}
  />
);
