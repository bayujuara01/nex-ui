import { NexReactTable, type NexTableColumnDef } from '../../src';

import { faker } from '@faker-js/faker';
import { type Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Features/Header Action Examples',
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

export const HeaderActionsDisabledDefault = () => (
  <NexReactTable columns={columns} data={data} />
);

export const HeaderActionsEnabled = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableHeaderActionsHoverReveal
  />
);

export const HeaderActionsEnabledCenterAlign = () => (
  <NexReactTable
    columns={columns}
    data={data}
    defaultColumn={{
      mantineTableHeadCellProps: {
        align: 'center',
      },
    }}
    enableHeaderActionsHoverReveal
  />
);

export const HeaderActionsEnabledRightAlign = () => (
  <NexReactTable
    columns={columns}
    data={data}
    defaultColumn={{
      mantineTableHeadCellProps: {
        align: 'right',
      },
    }}
    enableHeaderActionsHoverReveal
  />
);

export const HeaderActionsDisabledWithFeatures = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableColumnOrdering
    enableColumnPinning
    enableColumnResizing
    enableRowNumbers
    enableRowSelection
  />
);

export const HeaderActionsEnabledWithFeatures = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableColumnOrdering
    enableColumnPinning
    enableColumnResizing
    enableHeaderActionsHoverReveal
    enableRowNumbers
    enableRowSelection
  />
);

export const HeaderActionsEnabledWithFeaturesCenterAlign = () => (
  <NexReactTable
    columns={columns}
    data={data}
    defaultColumn={{
      mantineTableHeadCellProps: {
        align: 'center',
      },
    }}
    enableColumnOrdering
    enableColumnPinning
    enableColumnResizing
    enableHeaderActionsHoverReveal
    enableRowNumbers
    enableRowSelection
  />
);

export const HeaderActionsEnabledWithFeaturesRightAlign = () => (
  <NexReactTable
    columns={columns}
    data={data}
    defaultColumn={{
      mantineTableHeadCellProps: {
        align: 'right',
      },
    }}
    enableColumnOrdering
    enableColumnPinning
    enableColumnResizing
    enableHeaderActionsHoverReveal
    enableRowNumbers
    enableRowSelection
  />
);
