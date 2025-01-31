import { useEffect, useState } from 'react';

import { Modal } from '@nex-ui/core';

import { NexReactTable, type NexTableColumnDef } from '../../src';

import { faker } from '@faker-js/faker';
import { type Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Features/Virtualization',
};

export default meta;

const longColumns: NexTableColumnDef<any>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'middleName',
    header: 'Middle Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'email',
    header: 'Email Address',
    size: 300,
  },
  {
    accessorKey: 'phoneNumber',
    header: 'Phone Number',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'zipCode',
    header: 'Zip Code',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
  {
    accessorKey: 'state',
    header: 'State',
  },
  {
    accessorKey: 'country',
    header: 'Country',
    size: 200,
  },
  {
    accessorKey: 'favoriteColor',
    header: 'Favorite Color',
  },
  {
    accessorKey: 'favoriteQuote',
    header: 'Favorite Quote',
    size: 700,
  },
  {
    accessorKey: 'petName',
    header: 'Pet Name',
  },
  {
    accessorKey: 'petType',
    header: 'Pet Type',
  },
];

const longData = [...Array(500)].map(() => ({
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  country: faker.location.country(),
  email: faker.internet.email(),
  favoriteColor: faker.internet.color(),
  favoriteQuote: faker.lorem.sentence(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  middleName: faker.person.firstName(),
  petName: faker.animal.cat(),
  petType: faker.animal.type(),
  phoneNumber: faker.phone.number(),
  state: faker.location.state(),
  zipCode: faker.location.zipCode(),
}));

export const EnableRowVirtualizationDense = () => (
  <NexReactTable
    columns={longColumns}
    data={longData}
    enableBottomToolbar={false}
    enablePagination={false}
    enableRowNumbers
    enableRowVirtualization
    initialState={{ density: 'xs' }}
  />
);

export const EnableRowVirtualizationInModal = () => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpened(true);
    }, 100);
  }, []);

  return (
    <Modal onClose={() => setOpened(false)} opened={opened} size="xl">
      <NexReactTable
        columns={longColumns}
        data={longData}
        enableBottomToolbar={false}
        enableColumnVirtualization
        enablePagination={false}
        enableRowNumbers
        enableRowVirtualization
      />
    </Modal>
  );
};

export const EnableRowVirtualizationComfortable = () => (
  <NexReactTable
    columns={longColumns}
    data={longData}
    enableBottomToolbar={false}
    enablePagination={false}
    enableRowNumbers
    enableRowVirtualization
  />
);

export const EnableRowVirtualizationSpacious = () => (
  <NexReactTable
    columns={longColumns}
    data={longData}
    enableBottomToolbar={false}
    enablePagination={false}
    enableRowNumbers
    enableRowVirtualization
    initialState={{ density: 'xl' }}
  />
);

export const EnableRowVirtualizationTallContent = () => (
  <NexReactTable
    columns={longColumns}
    data={longData}
    enableBottomToolbar={false}
    enablePagination={false}
    enableRowNumbers
    enableRowVirtualization
  />
);

export const EnableRowVirtualizationWithColumnResizing = () => (
  <NexReactTable
    columns={longColumns}
    data={longData}
    enableBottomToolbar={false}
    enableColumnResizing
    enablePagination={false}
    enableRowNumbers
    enableRowVirtualization
  />
);

export const EnableRowVirtualizationWithDetailPanel = () => (
  <NexReactTable
    columns={longColumns}
    data={longData}
    enableBottomToolbar={false}
    enablePagination={false}
    enableRowNumbers
    enableRowVirtualization
    renderDetailPanel={() => <div>Detail Panel</div>}
  />
);

export const EnableRowVirtualizationWithMemoizedCells = () => (
  <NexReactTable
    columns={longColumns}
    data={longData}
    enableBottomToolbar={false}
    enableDensityToggle={false}
    enablePagination={false}
    enableRowNumbers
    enableRowVirtualization
    initialState={{ density: 'xs' }}
    memoMode="cells"
  />
);

export const EnableRowVirtualizationWithMemoizedRows = () => (
  <NexReactTable
    columns={longColumns}
    data={longData}
    enableBottomToolbar={false}
    enableDensityToggle={false}
    enablePagination={false}
    enableRowNumbers
    enableRowVirtualization
    initialState={{ density: 'xs' }}
    memoMode="rows"
  />
);

export const EnableRowVirtualizationStickyFooter = () => (
  <NexReactTable
    columns={[
      {
        accessorKey: 'firstName',
        footer: 'First Name',
        header: 'First Name',
      },
      {
        accessorKey: 'middleName',
        footer: 'Middle Name',
        header: 'Middle Name',
      },
      {
        accessorKey: 'lastName',
        footer: 'Last Name',
        header: 'Last Name',
      },
    ]}
    data={longData}
    enableBottomToolbar={false}
    enablePagination={false}
    enableRowNumbers
    enableRowVirtualization
    enableStickyFooter
  />
);

export const EnableColumnVirtualization = () => (
  <NexReactTable
    columns={longColumns}
    data={longData.slice(0, 10)}
    enableColumnVirtualization
    enableRowNumbers
  />
);

export const EnableColumnVirtualizationWithPinning = () => (
  <NexReactTable
    columns={longColumns}
    data={longData.slice(0, 10)}
    enableColumnPinning
    enableColumnVirtualization
    enableRowNumbers
  />
);

export const EnableColumnVirtualizationShortColumns = () => (
  <NexReactTable
    columns={longColumns.slice(0, 3)}
    data={longData.slice(0, 10)}
    enableColumnVirtualization
    enableRowNumbers
  />
);

export const EnableColumnVirtualizationWithFooter = () => (
  <NexReactTable
    columns={[
      {
        accessorKey: 'firstName',
        footer: 'First Name',
        header: 'First Name',
      },
      {
        accessorKey: 'middleName',
        footer: 'Middle Name',
        header: 'Middle Name',
      },
      {
        accessorKey: 'lastName',
        footer: 'Last Name',
        header: 'Last Name',
      },
    ]}
    data={longData.slice(0, 15)}
    enableColumnVirtualization
    enableRowNumbers
  />
);

export const EnableColumnVirtualizationStickyFooter = () => (
  <NexReactTable
    columns={[
      {
        accessorKey: 'firstName',
        footer: 'First Name',
        header: 'First Name',
      },
      {
        accessorKey: 'middleName',
        footer: 'Middle Name',
        header: 'Middle Name',
      },
      {
        accessorKey: 'lastName',
        footer: 'Last Name',
        header: 'Last Name',
      },
    ]}
    data={longData.slice(0, 50)}
    enableColumnVirtualization
    enableRowNumbers
    enableStickyFooter
  />
);

export const RowAndColumnVirtualization = () => (
  <NexReactTable
    columns={longColumns}
    data={longData}
    enableBottomToolbar={false}
    enableColumnVirtualization
    enablePagination={false}
    enableRowNumbers
    enableRowVirtualization
  />
);

export const RowAndColumnVirtualizationWithFeatures = () => (
  <NexReactTable
    columns={longColumns}
    data={longData}
    enableBottomToolbar={false}
    enableColumnOrdering
    enableColumnPinning
    enableColumnResizing
    enableColumnVirtualization
    enablePagination={false}
    enableRowNumbers
    enableRowSelection
    enableRowVirtualization
  />
);

const fakeColumns = [...Array(500)].map((_, i) => {
  return {
    accessorKey: i.toString(),
    header: 'Column ' + i.toString(),
  };
});

const fakeData = [...Array(500)].map(() => ({
  ...Object.fromEntries(
    fakeColumns.map((col) => [col.accessorKey, faker.person.firstName()]),
  ),
}));

export const MaxVirtualization = () => (
  <NexReactTable
    columns={fakeColumns}
    data={fakeData}
    enableBottomToolbar={false}
    enableColumnPinning
    enableColumnResizing
    enableColumnVirtualization
    enablePagination={false}
    enableRowNumbers
    enableRowVirtualization
    mantinePaperProps={{ style: { margin: 'auto', maxWidth: 1000 } }}
    mantineTableContainerProps={{ style: { maxHeight: 500 } }}
  />
);

export const EmptyDataVirtualization = () => (
  <NexReactTable
    columns={fakeColumns}
    data={[]}
    enableBottomToolbar={false}
    enableColumnPinning
    enableColumnResizing
    enableColumnVirtualization
    enablePagination={false}
    enableRowNumbers
    enableRowVirtualization
    mantinePaperProps={{ style: { margin: 'auto', maxWidth: 1000 } }}
    mantineTableContainerProps={{ style: { maxHeight: 500 } }}
  />
);
