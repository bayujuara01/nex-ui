import { type RefObject } from 'react';

import { NexTableBodyRowGrabHandle } from '../../components/body/NexTableBodyRowGrabHandle';
import {
  type NexTableColumnDef,
  type NexRowData,
  type NexTableStatefulTableOptions,
} from '../../types';
import { defaultDisplayColumnProps } from '../../utils/displayColumn.utils';

export const getNexTableRowDragColumnDef = <TData extends NexRowData>(
  tableOptions: NexTableStatefulTableOptions<TData>,
): NexTableColumnDef<TData> | null => {
  return {
    Cell: ({ row, rowRef, table }) => (
      <NexTableBodyRowGrabHandle
        row={row}
        rowRef={rowRef as RefObject<HTMLTableRowElement>}
        table={table}
      />
    ),
    grow: false,
    ...defaultDisplayColumnProps({
      header: 'move',
      id: 'mrt-row-drag',
      size: 60,
      tableOptions,
    }),
  };
};
