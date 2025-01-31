import { NexReactTable, type NexTableColumnDef } from '../../src';

import { faker } from '@faker-js/faker';
import { type Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Styling/Style Table Body Rows',
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
];
const data = [...Array(44)].map(() => ({
  address: faker.location.streetAddress(),
  age: faker.number.int(80),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
}));

export const DefaultTableBodyRowStyles = () => (
  <NexReactTable columns={columns} data={data} />
);

export const DisableRowHoverEffect = () => (
  <NexReactTable
    columns={columns}
    data={data}
    mantineTableProps={{
      highlightOnHover: false,
    }}
  />
);

export const StyleMantineTableBodyRow = () => (
  <NexReactTable
    columns={columns}
    data={data}
    mantineTableBodyRowProps={{
      style: {
        backgroundColor: 'rgba(52, 210, 235, 0.1)',
      },
    }}
  />
);

export const StripedRowsTrue = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableRowPinning
    enableRowSelection
    mantineTableProps={{
      striped: true,
    }}
  />
);

export const StripedRowsCustomColor = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enableColumnPinning
    enablePagination={false}
    enableRowPinning
    enableRowSelection
    enableRowVirtualization
    mantineTableProps={{
      striped: true,
      stripedColor: 'rgba(255, 255, 0, 0.1)',
    }}
  />
);

export const StripedRowsOdd = () => (
  <NexReactTable
    columns={columns}
    data={data}
    mantineTableProps={{
      striped: 'odd',
    }}
  />
);

export const StripedRowsEven = () => (
  <NexReactTable
    columns={columns}
    data={data}
    mantineTableProps={{
      striped: 'even',
    }}
  />
);

export const StripedRowsTrueDetailPanel = () => (
  <NexReactTable
    columns={columns}
    data={data}
    mantineTableProps={{
      striped: true,
    }}
    renderDetailPanel={() => <div>Detail Panel</div>}
  />
);

export const StripedRowsOddDetailPanel = () => (
  <NexReactTable
    columns={columns}
    data={data}
    mantineTableProps={{
      striped: 'odd',
    }}
    renderDetailPanel={() => <div>Detail Panel</div>}
  />
);

export const StripedRowsEvenDetailPanel = () => (
  <NexReactTable
    columns={columns}
    data={data}
    mantineTableProps={{
      striped: 'even',
    }}
    renderDetailPanel={() => <div>Detail Panel</div>}
  />
);

export const StripedRowsEvenDetailPanelVirtual = () => (
  <NexReactTable
    columns={columns}
    data={data}
    enablePagination={false}
    enableRowVirtualization
    mantineTableProps={{
      striped: 'even',
    }}
    renderDetailPanel={() => <div>Detail Panel</div>}
  />
);

export const ConditionallyStyleMantineTableRow = () => (
  <NexReactTable
    columns={columns}
    data={data}
    mantineTableBodyRowProps={({ row }) => ({
      style: {
        backgroundColor:
          row.getValue<number>('age') > 50 ? 'rgba(255, 54, 33, 0.18)' : '',
        fontStyle: 'italic',
      },
    })}
  />
);
