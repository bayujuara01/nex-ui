import { Button, Menu } from '@nex-ui/core';

import { NexReactTable, type NexTableColumnDef } from '../../src';

import { faker } from '@faker-js/faker';
import { type Meta } from '@storybook/react';
import { IconSend, IconUserCircle } from '@tabler/icons-react';

const meta: Meta = {
  title: 'Fixed Bugs/Click Propagation',
};

export default meta;

type Person = {
  address: string;
  city: string;
  firstName: string;
  lastName: string;
  state: string;
};

const columns: NexTableColumnDef<Person>[] = [
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
    accessorKey: 'city',
    header: 'City',
  },
  {
    accessorKey: 'state',
    header: 'State',
  },
];

const data = [...Array(6)].map(() => ({
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  state: faker.location.state(),
}));

export const RowClickAndRowMenuActions = () => {
  return (
    <NexReactTable
      columns={columns}
      data={data}
      enableEditing
      enableRowActions
      mantineTableBodyRowProps={{
        onClick: () => {
          alert('row click');
        },
      }}
      renderRowActionMenuItems={() => (
        <>
          <Menu.Item leftSection={<IconUserCircle />}>View Profile</Menu.Item>
          <Menu.Item leftSection={<IconSend />}>Send Email</Menu.Item>
        </>
      )}
    />
  );
};

export const RowClickAndRowButtonctions = () => {
  return (
    <NexReactTable
      columns={columns}
      data={data}
      enableEditing
      enableRowActions
      mantineTableBodyRowProps={{
        onClick: () => {
          alert('row click');
        },
      }}
      renderRowActions={() => (
        <Button onClick={(e) => e.stopPropagation()}>Test</Button>
      )}
    />
  );
};
