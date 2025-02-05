import { DirectionProvider } from '@nex-ui/core';

import { NexReactTable, type NexTableColumnDef } from '../../src';

import { faker } from '@faker-js/faker';
import { type Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Features/Column Resizing Examples',
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
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'state',
    header: 'State',
  },
  {
    accessorKey: 'zipCode',
    header: 'Zip Code',
  },
  {
    accessorKey: 'phoneNumber',
    header: 'Phone Number',
  },
];

const data = [...Array(88)].map(() => ({
  address: faker.location.streetAddress(),
  firstName: faker.person.firstName(),
  id: faker.number.int(100),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
  state: faker.location.state(),
  zipCode: faker.location.zipCode(),
}));

export const ColumnResizingEnabledDefaultOnChange = () => (
  <NexReactTable columns={columns} data={data} enableColumnResizing />
);

export const ColumnResizingEnabledDefaultOnChangeRTL = () => (
  <DirectionProvider initialDirection="rtl">
    <div style={{ direction: 'rtl' }}>
      <NexReactTable
        columnResizeDirection="rtl"
        columns={columns}
        data={data}
        enableColumnResizing
      />
    </div>
  </DirectionProvider>
);

export const ColumnResizingEnabledDefaultOnChangeGrid = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableColumnResizing
    layoutMode="grid"
  />
);

export const ColumnResizingDefaultOnChangeGridWithIndividualShrink = () => (
  <NexReactTable
    columns={[
      {
        accessorKey: 'id',
        grow: false,
        header: 'ID',
        size: 50,
      },
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
    ]}
    data={data}
    enableColumnResizing
    layoutMode="grid"
  />
);

export const ColumnResizingEnabledDefaultOnChangeGridRTL = () => (
  <DirectionProvider initialDirection="rtl">
    <div style={{ direction: 'rtl' }}>
      <NexReactTable
        columnResizeDirection="rtl"
        columns={columns}
        data={data}
        enableColumnResizing
        layoutMode="grid"
      />
    </div>
  </DirectionProvider>
);

export const ColumnResizingEnabledDefaultOnChangeSemantic = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableColumnResizing
    layoutMode="semantic"
  />
);

export const ColumnResizingEnabledDefaultOnChangeSemanticRTL = () => (
  <DirectionProvider initialDirection="rtl">
    <div style={{ direction: 'rtl' }}>
      <NexReactTable
        columnResizeDirection="rtl"
        columns={columns}
        data={data}
        enableColumnResizing
        layoutMode="semantic"
      />
    </div>
  </DirectionProvider>
);

export const ColumnResizingEnabledNoColumnActions = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableColumnActions={false}
    enableColumnResizing
  />
);

export const ColumnResizingDisabledSomeColumns = () => (
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
        header: 'Address',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
      {
        accessorKey: 'zipCode',
        enableResizing: false,
        header: 'Zip Code',
      },
      {
        accessorKey: 'phoneNumber',
        header: 'Phone Number',
      },
    ]}
    data={data}
    enableColumnResizing
  />
);

export const ColumnResizingEnabledOnEnd = () => (
  <NexReactTable
    columnResizeMode="onEnd"
    columns={columns}
    data={data}
    enableColumnResizing
  />
);

export const ColumnResizingEnabledOnEndRTL = () => (
  <DirectionProvider initialDirection="rtl">
    <div style={{ direction: 'rtl' }}>
      <NexReactTable
        columnResizeDirection="rtl"
        columnResizeMode="onEnd"
        columns={columns}
        data={data}
        enableColumnResizing
      />
    </div>
  </DirectionProvider>
);

export const ColumnResizingCustomDefaultWidths = () => (
  <NexReactTable
    columns={columns}
    data={data}
    defaultColumn={{ maxSize: 300, minSize: 100, size: 150 }}
    enableColumnResizing
  />
);

export const ColumnResizingWithPinning = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableColumnPinning
    enableColumnResizing
    initialState={{ columnPinning: { left: ['firstName', 'lastName'] } }}
  />
);

export const ColumnResizingWithHeaderGroups = () => (
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
      },
    ]}
    data={[...Array(5)].map(() => ({
      address: faker.location.streetAddress(),
      age: faker.number.int(80),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    }))}
    enableColumnResizing
  />
);

export const ColumnResizingWithHeaderGroupsGridGrow = () => (
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
      },
    ]}
    data={[...Array(5)].map(() => ({
      address: faker.location.streetAddress(),
      age: faker.number.int(80),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    }))}
    enableColumnResizing
    enableRowSelection
    layoutMode="grid"
  />
);

export const ColumnResizingLayoutGridGrow = () => (
  <NexReactTable
    columns={columns.slice(0, 3)}
    data={data}
    enableColumnResizing
    enableRowSelection
    layoutMode="grid"
  />
);

export const ColumnResizingLayoutGridGrowRTL = () => (
  <DirectionProvider initialDirection="rtl">
    <div style={{ direction: 'rtl' }}>
      <NexReactTable
        columnResizeDirection="rtl"
        columns={columns.slice(0, 3)}
        data={data}
        enableColumnResizing
        enableRowSelection
        layoutMode="grid"
      />
    </div>
  </DirectionProvider>
);
