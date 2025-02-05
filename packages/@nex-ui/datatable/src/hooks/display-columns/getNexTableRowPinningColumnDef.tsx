import { NexTableBodyRowPinButton } from '../../components/body/NexTableBodyRowPinButton';
import {
  type NexTableColumnDef,
  type NexRowData,
  type NexTableStatefulTableOptions,
} from '../../types';
import { defaultDisplayColumnProps } from '../../utils/displayColumn.utils';

export const getNexTableRowPinningColumnDef = <TData extends NexRowData>(
  tableOptions: NexTableStatefulTableOptions<TData>,
): NexTableColumnDef<TData> | null => {
  return {
    Cell: ({ row, table }) => (
      <NexTableBodyRowPinButton row={row} table={table} />
    ),
    grow: false,
    ...defaultDisplayColumnProps({
      header: 'pin',
      id: 'mrt-row-pin',
      size: 60,
      tableOptions,
    }),
  };
};
