import { useMemo, useRef, useState } from 'react';

import { useReactTable } from '@tanstack/react-table';

import {
  type NexTableCell,
  type NexTableColumn,
  type NexTableColumnDef,
  type NexTableColumnFilterFnsState,
  type NexTableColumnOrderState,
  type NexTableColumnSizingInfoState,
  type NexTableDefinedTableOptions,
  type NexTableDensityState,
  type NexTableFilterOption,
  type NexTableGroupingState,
  type NexTablePaginationState,
  type NexTableRow,
  type NexRowData,
  type NexTableStatefulTableOptions,
  type NexTableTableInstance,
  type NexTableTableState,
  type NexTableUpdater,
} from '../types';
import {
  getAllLeafColumnDefs,
  getColumnId,
  getDefaultColumnFilterFn,
  prepareColumns,
} from '../utils/column.utils';
import {
  getDefaultColumnOrderIds,
  showRowActionsColumn,
  showRowDragColumn,
  showRowExpandColumn,
  showRowNumbersColumn,
  showRowPinningColumn,
  showRowSelectionColumn,
  showRowSpacerColumn,
} from '../utils/displayColumn.utils';
import { createRow } from '../utils/tanstack.helpers';
import { getNexTableRowActionsColumnDef } from './display-columns/getNexTableRowActionsColumnDef';
import { getNexTableRowDragColumnDef } from './display-columns/getNexTableRowDragColumnDef';
import { getNexTableRowExpandColumnDef } from './display-columns/getNexTableRowExpandColumnDef';
import { getNexTableRowNumbersColumnDef } from './display-columns/getNexTableRowNumbersColumnDef';
import { getNexTableRowPinningColumnDef } from './display-columns/getNexTableRowPinningColumnDef';
import { getNexTableRowSelectColumnDef } from './display-columns/getNexTableRowSelectColumnDef';
import { getNexTableRowSpacerColumnDef } from './display-columns/getNexTableRowSpacerColumnDef';
import { useNexTableEffects } from './useNexTableEffects';

/**
 * The MRT hook that wraps the TanStack useReactTable hook and adds additional functionality
 * @param definedTableOptions - table options with proper defaults set
 * @returns the MRT table instance
 */
export const useNexTableInstance = <TData extends NexRowData>(
  definedTableOptions: NexTableDefinedTableOptions<TData>,
): NexTableTableInstance<TData> => {
  const lastSelectedRowId = useRef<null | string>(null);
  const bottomToolbarRef = useRef<HTMLDivElement>(null);
  const editInputRefs = useRef<Record<string, HTMLInputElement>>({});
  const filterInputRefs = useRef<Record<string, HTMLInputElement>>({});
  const searchInputRef = useRef<HTMLInputElement>(null);
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const tableHeadCellRefs = useRef<Record<string, HTMLTableCellElement>>({});
  const tablePaperRef = useRef<HTMLDivElement>(null);
  const topToolbarRef = useRef<HTMLDivElement>(null);
  const tableHeadRef = useRef<HTMLTableSectionElement>(null);
  const tableFooterRef = useRef<HTMLTableSectionElement>(null);

  //transform initial state with proper column order
  const initialState: Partial<NexTableTableState<TData>> = useMemo(() => {
    const initState = definedTableOptions.initialState ?? {};
    initState.columnOrder =
      initState.columnOrder ??
      getDefaultColumnOrderIds({
        ...definedTableOptions,
        state: {
          ...definedTableOptions.initialState,
          ...definedTableOptions.state,
        },
      } as NexTableStatefulTableOptions<TData>);
    initState.globalFilterFn = definedTableOptions.globalFilterFn ?? 'fuzzy';
    return initState;
  }, []);

  definedTableOptions.initialState = initialState;

  const [creatingRow, _setCreatingRow] = useState<NexTableRow<TData> | null>(
    initialState.creatingRow ?? null,
  );
  const [columnFilterFns, setColumnFilterFns] =
    useState<NexTableColumnFilterFnsState>(() =>
      Object.assign(
        {},
        ...getAllLeafColumnDefs(
          definedTableOptions.columns as NexTableColumnDef<TData>[],
        ).map((col) => ({
          [getColumnId(col)]:
            col.filterFn instanceof Function
              ? (col.filterFn.name ?? 'custom')
              : (col.filterFn ??
                initialState?.columnFilterFns?.[getColumnId(col)] ??
                getDefaultColumnFilterFn(col)),
        })),
      ),
    );
  const [columnOrder, onColumnOrderChange] = useState<NexTableColumnOrderState>(
    initialState.columnOrder ?? [],
  );
  const [columnSizingInfo, onColumnSizingInfoChange] =
    useState<NexTableColumnSizingInfoState>(
      initialState.columnSizingInfo ?? ({} as NexTableColumnSizingInfoState),
    );
  const [density, setDensity] = useState<NexTableDensityState>(
    initialState?.density ?? 'md',
  );
  const [draggingColumn, setDraggingColumn] =
    useState<NexTableColumn<TData> | null>(initialState.draggingColumn ?? null);
  const [draggingRow, setDraggingRow] = useState<NexTableRow<TData> | null>(
    initialState.draggingRow ?? null,
  );
  const [editingCell, setEditingCell] = useState<NexTableCell<TData> | null>(
    initialState.editingCell ?? null,
  );
  const [editingRow, setEditingRow] = useState<NexTableRow<TData> | null>(
    initialState.editingRow ?? null,
  );
  const [globalFilterFn, setGlobalFilterFn] = useState<NexTableFilterOption>(
    initialState.globalFilterFn ?? 'fuzzy',
  );
  const [grouping, onGroupingChange] = useState<NexTableGroupingState>(
    initialState.grouping ?? [],
  );
  const [hoveredColumn, setHoveredColumn] = useState<null | Partial<
    NexTableColumn<TData>
  >>(initialState.hoveredColumn ?? null);
  const [hoveredRow, setHoveredRow] = useState<null | Partial<NexTableRow<TData>>>(
    initialState.hoveredRow ?? null,
  );
  const [isFullScreen, setIsFullScreen] = useState<boolean>(
    initialState?.isFullScreen ?? false,
  );
  const [pagination, onPaginationChange] = useState<NexTablePaginationState>(
    initialState?.pagination ?? { pageIndex: 0, pageSize: 10 },
  );
  const [showAlertBanner, setShowAlertBanner] = useState<boolean>(
    initialState?.showAlertBanner ?? false,
  );
  const [showColumnFilters, setShowColumnFilters] = useState<boolean>(
    initialState?.showColumnFilters ?? false,
  );
  const [showGlobalFilter, setShowGlobalFilter] = useState<boolean>(
    initialState?.showGlobalFilter ?? false,
  );
  const [showToolbarDropZone, setShowToolbarDropZone] = useState<boolean>(
    initialState?.showToolbarDropZone ?? false,
  );

  definedTableOptions.state = {
    columnFilterFns,
    columnOrder,
    columnSizingInfo,
    creatingRow,
    density,
    draggingColumn,
    draggingRow,
    editingCell,
    editingRow,
    globalFilterFn,
    grouping,
    hoveredColumn,
    hoveredRow,
    isFullScreen,
    pagination,
    showAlertBanner,
    showColumnFilters,
    showGlobalFilter,
    showToolbarDropZone,
    ...definedTableOptions.state,
  };

  //The table options now include all state needed to help determine column visibility and order logic
  const statefulTableOptions =
    definedTableOptions as NexTableStatefulTableOptions<TData>;

  //don't recompute columnDefs while resizing column or dragging column/row
  const columnDefsRef = useRef<NexTableColumnDef<TData>[]>([]);
  statefulTableOptions.columns =
    statefulTableOptions.state.columnSizingInfo.isResizingColumn ||
    statefulTableOptions.state.draggingColumn ||
    statefulTableOptions.state.draggingRow
      ? columnDefsRef.current
      : prepareColumns({
          columnDefs: [
            ...([
              showRowPinningColumn(statefulTableOptions) &&
                getNexTableRowPinningColumnDef(statefulTableOptions),
              showRowDragColumn(statefulTableOptions) &&
                getNexTableRowDragColumnDef(statefulTableOptions),
              showRowActionsColumn(statefulTableOptions) &&
                getNexTableRowActionsColumnDef(statefulTableOptions),
              showRowExpandColumn(statefulTableOptions) &&
                getNexTableRowExpandColumnDef(statefulTableOptions),
              showRowSelectionColumn(statefulTableOptions) &&
                getNexTableRowSelectColumnDef(statefulTableOptions),
              showRowNumbersColumn(statefulTableOptions) &&
                getNexTableRowNumbersColumnDef(statefulTableOptions),
            ].filter(Boolean) as NexTableColumnDef<TData>[]),
            ...statefulTableOptions.columns,
            ...([
              showRowSpacerColumn(statefulTableOptions) &&
                getNexTableRowSpacerColumnDef(statefulTableOptions),
            ].filter(Boolean) as NexTableColumnDef<TData>[]),
          ],
          tableOptions: statefulTableOptions,
        });
  columnDefsRef.current = statefulTableOptions.columns;

  //if loading, generate blank rows to show skeleton loaders
  statefulTableOptions.data = useMemo(
    () =>
      (statefulTableOptions.state.isLoading ||
        statefulTableOptions.state.showSkeletons) &&
      !statefulTableOptions.data.length
        ? [
            ...Array(
              Math.min(statefulTableOptions.state.pagination.pageSize, 20),
            ).fill(null),
          ].map(() =>
            Object.assign(
              {},
              ...getAllLeafColumnDefs(statefulTableOptions.columns).map(
                (col) => ({
                  [getColumnId(col)]: null,
                }),
              ),
            ),
          )
        : statefulTableOptions.data,
    [
      statefulTableOptions.data,
      statefulTableOptions.state.isLoading,
      statefulTableOptions.state.showSkeletons,
    ],
  );

  //@ts-ignore
  const table = useReactTable({
    onColumnOrderChange,
    onColumnSizingInfoChange,
    onGroupingChange,
    onPaginationChange,
    ...statefulTableOptions,
    globalFilterFn: statefulTableOptions.filterFns?.[globalFilterFn ?? 'fuzzy'],
  }) as NexTableTableInstance<TData>;

  table.refs = {
    bottomToolbarRef,
    editInputRefs,
    filterInputRefs,
    lastSelectedRowId,
    searchInputRef,
    tableContainerRef,
    tableFooterRef,
    tableHeadCellRefs,
    tableHeadRef,
    tablePaperRef,
    topToolbarRef,
  };

  table.setCreatingRow = (row: NexTableUpdater<NexTableRow<TData> | null | true>) => {
    let _row = row;
    if (row === true) {
      _row = createRow(table);
    }
    if (statefulTableOptions?.onCreatingRowChange) {
      statefulTableOptions.onCreatingRowChange(_row as NexTableRow<TData> | null);
    } else {
      _setCreatingRow(_row as NexTableRow<TData> | null);
    }
  };
  table.setColumnFilterFns =
    statefulTableOptions.onColumnFilterFnsChange ?? setColumnFilterFns;
  table.setDensity = statefulTableOptions.onDensityChange ?? setDensity;
  table.setDraggingColumn =
    statefulTableOptions.onDraggingColumnChange ?? setDraggingColumn;
  table.setDraggingRow =
    statefulTableOptions.onDraggingRowChange ?? setDraggingRow;
  table.setEditingCell =
    statefulTableOptions.onEditingCellChange ?? setEditingCell;
  table.setEditingRow =
    statefulTableOptions.onEditingRowChange ?? setEditingRow;
  table.setGlobalFilterFn =
    statefulTableOptions.onGlobalFilterFnChange ?? setGlobalFilterFn;
  table.setHoveredColumn =
    statefulTableOptions.onHoveredColumnChange ?? setHoveredColumn;
  table.setHoveredRow =
    statefulTableOptions.onHoveredRowChange ?? setHoveredRow;
  table.setIsFullScreen =
    statefulTableOptions.onIsFullScreenChange ?? setIsFullScreen;
  table.setShowAlertBanner =
    statefulTableOptions.onShowAlertBannerChange ?? setShowAlertBanner;
  table.setShowColumnFilters =
    statefulTableOptions.onShowColumnFiltersChange ?? setShowColumnFilters;
  table.setShowGlobalFilter =
    statefulTableOptions.onShowGlobalFilterChange ?? setShowGlobalFilter;
  table.setShowToolbarDropZone =
    statefulTableOptions.onShowToolbarDropZoneChange ?? setShowToolbarDropZone;

  useNexTableEffects(table);

  return table;
};
