import { MRT_DefaultDisplayColumn } from '../useNexTableOptions';

import {
  type NexTableColumnDef,
  type NexRowData,
  type NexTableStatefulTableOptions,
} from '../../types';
import { defaultDisplayColumnProps } from '../../utils/displayColumn.utils';

const blankColProps = {
  children: null,
  style: {
    minWidth: 0,
    padding: 0,
    width: 0,
  },
};

export const getNexTableRowSpacerColumnDef = <TData extends NexRowData>(
  tableOptions: NexTableStatefulTableOptions<TData>,
): NexTableColumnDef<TData> | null => {
  return {
    ...defaultDisplayColumnProps({
      id: 'mrt-row-spacer',
      size: 0,
      tableOptions,
    }),
    grow: true,
    ...MRT_DefaultDisplayColumn,
    mantineTableBodyCellProps: blankColProps,
    mantineTableFooterCellProps: blankColProps,
    mantineTableHeadCellProps: blankColProps,
  };
};
