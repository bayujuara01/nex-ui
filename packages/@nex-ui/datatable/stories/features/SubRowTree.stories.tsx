import { DirectionProvider } from '@nex-ui/core';

import { NexReactTable, type NexTableColumnDef } from '../../src';

import { MRT_Localization_HE } from '../../src/locales/he';

import { faker } from '@faker-js/faker';
import { type Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Features/Sub Row Tree Examples',
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
  {
    accessorKey: 'phoneNumber',
    header: 'Phone Number',
  },
];

const data = [...Array(5)].map(() => ({
  address: faker.location.streetAddress(),
  age: faker.number.int(80),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
  subRows: [...Array(faker.number.int(4))].map(() => ({
    address: faker.location.streetAddress(),
    age: faker.number.int(80),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phoneNumber: faker.phone.number(),
    subRows: [...Array(3)].map(() => ({
      address: faker.location.streetAddress(),
      age: faker.number.int(80),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      phoneNumber: faker.phone.number(),
      subRows: [...Array(2)].map(() => ({
        address: faker.location.streetAddress(),
        age: faker.number.int(80),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
      })),
    })),
  })),
}));

export const SubRowTreeEnabledDefault = () => (
  <NexReactTable columns={columns} data={data} enableExpanding />
);

export const SubRowTreeLayoutGrid = () => (
  <NexReactTable
    columns={columns}
    data={data}
    displayColumnDefOptions={{
      'mrt-row-expand': {
        // size: 100,
      },
    }}
    enableExpanding
    initialState={{ expanded: true }}
    layoutMode="grid"
  />
);

export const SubRowTreeLayoutGridNoGrow = () => (
  <NexReactTable
    columns={columns}
    data={data}
    displayColumnDefOptions={{
      'mrt-row-expand': {
        // size: 100,
      },
    }}
    enableExpanding
    initialState={{ expanded: true }}
    layoutMode="grid-no-grow"
  />
);

export const SubRowTreeEnabledPositionLast = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableExpanding
    positionExpandColumn="last"
  />
);

export const SubRowTreeEnabledDefaultRTL = () => {
  return (
    <DirectionProvider initialDirection="rtl">
      <div style={{ direction: 'rtl' }}>
        <NexReactTable
          columns={columns}
          data={data}
          enableExpanding
          localization={MRT_Localization_HE}
        />
      </div>
    </DirectionProvider>
  );
};

export const SubRowTreeEnabledDefaultRTLAndPositionLast = () => {
  return (
    <DirectionProvider initialDirection="rtl">
      <div style={{ direction: 'rtl' }}>
        <NexReactTable
          columns={columns}
          data={data}
          enableExpanding
          localization={MRT_Localization_HE}
          positionActionsColumn="last"
        />
      </div>
    </DirectionProvider>
  );
};

export const SubRowTreeDisableExpandAll = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableExpandAll={false}
    enableExpanding
  />
);

export const SubRowTreeFilterFromLeafRows = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableExpanding
    enablePagination={false}
    filterFromLeafRows
    initialState={{ expanded: true, showColumnFilters: true }}
  />
);

export const SubRowTreeMaxLeafRowFilterDepth0 = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableExpanding
    enablePagination={false}
    initialState={{ expanded: true, showColumnFilters: true }}
    maxLeafRowFilterDepth={0}
  />
);

export const SubRowTreeMaxLeafRowFilterDepth1 = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableExpanding
    enablePagination={false}
    initialState={{ expanded: true, showColumnFilters: true }}
    maxLeafRowFilterDepth={1}
  />
);

export const SubRowTreeMaxLeafRowFilterDepthAndFilterFromLeafRows = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableExpanding
    enablePagination={false}
    filterFromLeafRows
    initialState={{ expanded: true, showColumnFilters: true }}
    maxLeafRowFilterDepth={0}
  />
);

export const SubRowTreeWithSelection = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableExpanding
    enablePagination={false}
    enableRowSelection
  />
);

export const SubRowTreeWithSelectionNoSubRowSelection = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableExpanding
    enablePagination={false}
    enableRowSelection
    enableSubRowSelection={false}
  />
);

export const SubRowTreeWithSingleSelection = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableExpanding
    enableMultiRowSelection={false}
    enablePagination={false}
    enableRowSelection
  />
);
