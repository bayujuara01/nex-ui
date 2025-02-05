import { type Row } from '@tanstack/react-table';

import {
  type NexTableColumn,
  type NexTableColumnDef,
  type NexTableColumnOrderState,
  type NexTableDefinedColumnDef,
  type NexTableDefinedTableOptions,
  type NexTableFilterOption,
  type NexRowData,
} from '../types';

export const getColumnId = <TData extends NexRowData>(
  columnDef: NexTableColumnDef<TData>,
): string =>
  columnDef.id ?? columnDef.accessorKey?.toString?.() ?? columnDef.header;

export const getAllLeafColumnDefs = <TData extends NexRowData>(
  columns: NexTableColumnDef<TData>[],
): NexTableColumnDef<TData>[] => {
  const allLeafColumnDefs: NexTableColumnDef<TData>[] = [];
  const getLeafColumns = (cols: NexTableColumnDef<TData>[]) => {
    cols.forEach((col) => {
      if (col.columns) {
        getLeafColumns(col.columns);
      } else {
        allLeafColumnDefs.push(col);
      }
    });
  };
  getLeafColumns(columns);
  return allLeafColumnDefs;
};

export const prepareColumns = <TData extends NexRowData>({
  columnDefs,
  tableOptions,
}: {
  columnDefs: NexTableColumnDef<TData>[];
  tableOptions: NexTableDefinedTableOptions<TData>;
}): NexTableDefinedColumnDef<TData>[] => {
  const {
    aggregationFns = {},
    defaultDisplayColumn,
    filterFns = {},
    sortingFns = {},
    state: { columnFilterFns = {} } = {},
  } = tableOptions;
  return columnDefs.map((columnDef) => {
    //assign columnId
    if (!columnDef.id) columnDef.id = getColumnId(columnDef);
    //assign columnDefType
    if (!columnDef.columnDefType) columnDef.columnDefType = 'data';
    if (columnDef.columns?.length) {
      columnDef.columnDefType = 'group';
      //recursively prepare columns if this is a group column
      columnDef.columns = prepareColumns({
        columnDefs: columnDef.columns,
        tableOptions,
      });
    } else if (columnDef.columnDefType === 'data') {
      //assign aggregationFns if multiple aggregationFns are provided
      if (Array.isArray(columnDef.aggregationFn)) {
        const aggFns = columnDef.aggregationFn as string[];
        columnDef.aggregationFn = (
          columnId: string,
          leafRows: Row<TData>[],
          childRows: Row<TData>[],
        ) =>
          aggFns.map((fn) =>
            aggregationFns[fn]?.(columnId, leafRows, childRows),
          );
      }

      //assign filterFns
      if (Object.keys(filterFns).includes(columnFilterFns[columnDef.id])) {
        columnDef.filterFn =
          filterFns[columnFilterFns[columnDef.id]] ?? filterFns.fuzzy;
        (columnDef as NexTableDefinedColumnDef<TData>)._filterFn =
          columnFilterFns[columnDef.id];
      }

      //assign sortingFns
      if (Object.keys(sortingFns).includes(columnDef.sortingFn as string)) {
        // @ts-ignore
        columnDef.sortingFn = sortingFns[columnDef.sortingFn];
      }
    } else if (columnDef.columnDefType === 'display') {
      columnDef = {
        ...(defaultDisplayColumn as NexTableColumnDef<TData>),
        ...columnDef,
      };
    }
    return columnDef;
  }) as NexTableDefinedColumnDef<TData>[];
};

export const reorderColumn = <TData extends NexRowData>(
  draggedColumn: NexTableColumn<TData>,
  targetColumn: NexTableColumn<TData>,
  columnOrder: NexTableColumnOrderState,
): NexTableColumnOrderState => {
  if (draggedColumn.getCanPin()) {
    draggedColumn.pin(targetColumn.getIsPinned());
  }
  const newColumnOrder = [...columnOrder];
  newColumnOrder.splice(
    newColumnOrder.indexOf(targetColumn.id),
    0,
    newColumnOrder.splice(newColumnOrder.indexOf(draggedColumn.id), 1)[0],
  );
  return newColumnOrder;
};

export const getDefaultColumnFilterFn = <TData extends NexRowData>(
  columnDef: NexTableColumnDef<TData>,
): NexTableFilterOption => {
  const { filterVariant } = columnDef;
  if (filterVariant === 'multi-select') return 'arrIncludesSome';
  if (filterVariant?.includes('range')) return 'betweenInclusive';
  if (['checkbox', 'date', 'select'].includes(filterVariant || ''))
    return 'equals';
  return 'fuzzy';
};
