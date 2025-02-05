import { useEffect, useState } from 'react';

import {
  NexReactTable,
  type NexTableColumnDef,
  type NexTableColumnFiltersState,
} from '../../src';

import { faker } from '@faker-js/faker';
import { type Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Fixed Bugs/useEffects',
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
    accessorKey: 'phoneNumber',
    header: 'Phone Number',
  },
];

const data = [...Array(100)].map(() => ({
  address: faker.location.streetAddress(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
  state: faker.location.state(),
}));

export const FilterModesRefetch = () => {
  const [columnFilters, setColumnFilters] = useState<NexTableColumnFiltersState>(
    [],
  );

  useEffect(() => {
    console.log('refetch', columnFilters);
  }, [columnFilters]);

  return (
    <NexReactTable
      columns={columns}
      data={data}
      enableColumnFilterModes
      initialState={{ showColumnFilters: true }}
      onColumnFiltersChange={setColumnFilters}
      state={{ columnFilters }}
    />
  );
};
