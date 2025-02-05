import { NexReactTable, type NexTableColumnDef } from '../../src';

import { faker } from '@faker-js/faker';
import { type Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Features/Search Examples',
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
    accessorKey: 'state',
    header: 'State',
  },
  {
    accessorKey: 'phoneNumber',
    header: 'Phone Number',
  },
];

const data = [...Array(200)].map(() => ({
  address: faker.location.streetAddress(),
  age: +faker.number.float({ max: 100, min: 0 }),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
  state: faker.location.state(),
}));

export const SearchEnabledDefault = () => (
  <NexReactTable columns={columns} data={data} />
);

export const SearchContains = () => (
  <NexReactTable columns={columns} data={data} globalFilterFn="contains" />
);

export const CustomGlobalFilterFn = () => (
  <NexReactTable
    columns={columns}
    data={data}
    filterFns={{
      myCustomFilterFn: (row, id, filterValue) =>
        row.getValue<string>(id).startsWith(filterValue),
    }}
    globalFilterFn="myCustomFilterFn"
  />
);

export const SearchGlobalFilterModes = () => (
  <NexReactTable columns={columns} data={data} enableGlobalFilterModes />
);

export const SearchGlobalFilterModeOptions = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableGlobalFilterModes
    globalFilterModeOptions={['asfd', 'contains', 'fuzzy']}
  />
);

export const SearchRankedResultsEnabledByDefault = () => (
  <NexReactTable columns={columns} data={data} enableRowNumbers />
);

export const SearchDisableRankedResults = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableGlobalFilterRankedResults={false}
    enableRowNumbers
  />
);

export const ShowSearchRightBoxByDefault = () => (
  <NexReactTable
    columns={columns}
    data={data}
    initialState={{ showGlobalFilter: true }}
  />
);

export const ShowSearchBoxLeftByDefault = () => (
  <NexReactTable
    columns={columns}
    data={data}
    initialState={{ showGlobalFilter: true }}
    positionGlobalFilter="left"
  />
);

export const ShowSearchBoxLeftByDefaultWithSelection = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableRowSelection
    initialState={{ showGlobalFilter: true }}
    positionGlobalFilter="left"
  />
);

export const JustASearchBox = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableToolbarInternalActions={false}
    initialState={{ showGlobalFilter: true }}
  />
);

export const SearchDisabled = () => (
  <NexReactTable columns={columns} data={data} enableGlobalFilter={false} />
);

export const CustomizeSearchTextBox = () => (
  <NexReactTable
    columns={columns}
    data={data}
    initialState={{ showGlobalFilter: true }}
    mantineSearchTextInputProps={{
      label: 'Search',
      placeholder: 'Search 100 rows',
      variant: 'filled',
    }}
  />
);
