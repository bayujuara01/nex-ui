import { NexTableToggleRowActionMenuButton } from '../../components/buttons/NexTableToggleRowActionMenuButton';
import {
  type NexTableColumnDef,
  type NexRowData,
  type NexTableStatefulTableOptions,
} from '../../types';
import { defaultDisplayColumnProps } from '../../utils/displayColumn.utils';

export const getNexTableRowActionsColumnDef = <TData extends NexRowData>(
  tableOptions: NexTableStatefulTableOptions<TData>,
): NexTableColumnDef<TData> | null => {
  return {
    Cell: ({ cell, row, table }) => (
      <NexTableToggleRowActionMenuButton cell={cell} row={row} table={table} />
    ),
    ...defaultDisplayColumnProps({
      header: 'actions',
      id: 'mrt-row-actions',
      size: 70,
      tableOptions,
    }),
  };
};
