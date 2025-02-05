import { NexTableSelectCheckbox } from '../../components/inputs/NexTableSelectCheckbox';
import {
  type NexTableColumnDef,
  type NexRowData,
  type NexTableStatefulTableOptions,
} from '../../types';
import { defaultDisplayColumnProps } from '../../utils/displayColumn.utils';

export const getNexTableRowSelectColumnDef = <TData extends NexRowData>(
  tableOptions: NexTableStatefulTableOptions<TData>,
): NexTableColumnDef<TData> | null => {
  const { enableMultiRowSelection, enableSelectAll } = tableOptions;

  return {
    Cell: ({ renderedRowIndex, row, table }) => (
      <NexTableSelectCheckbox
        renderedRowIndex={renderedRowIndex}
        row={row}
        table={table}
      />
    ),
    grow: false,
    Header:
      enableSelectAll && enableMultiRowSelection
        ? ({ table }) => <NexTableSelectCheckbox table={table} />
        : undefined,
    ...defaultDisplayColumnProps({
      header: 'select',
      id: 'mrt-row-select',
      size: enableSelectAll ? 60 : 70,
      tableOptions,
    }),
  };
};
