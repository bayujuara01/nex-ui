import { useMemo } from 'react';

import {
  type NexTableRow,
  type NexRowData,
  type NexTableTableInstance,
} from '../types';
import { getMRT_Rows } from '../utils/row.utils';

export const useNexTableRows = <TData extends NexRowData>(
  table: NexTableTableInstance<TData>,
): NexTableRow<TData>[] => {
  const {
    getRowModel,
    getState,
    options: { data, enableGlobalFilterRankedResults, positionCreatingRow },
  } = table;
  const {
    creatingRow,
    expanded,
    globalFilter,
    pagination,
    rowPinning,
    sorting,
  } = getState();

  const rows = useMemo(
    () => getMRT_Rows(table),
    [
      creatingRow,
      data,
      enableGlobalFilterRankedResults,
      expanded,
      getRowModel().rows,
      globalFilter,
      pagination.pageIndex,
      pagination.pageSize,
      positionCreatingRow,
      rowPinning,
      sorting,
    ],
  );

  return rows;
};
