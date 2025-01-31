import { useMemo } from 'react';

import {
  getCoreRowModel,
  getExpandedRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getGroupedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';

import { useDirection } from '@nex-ui/core';

import { NexTableAggregationFns } from '../fns/aggregationFns';
import { NexTableFilterFns } from '../fns/filterFns';
import { NexTableSortingFns } from '../fns/sortingFns';
import { MRT_Default_Icons } from '../icons';
import { MRT_Localization_EN } from '../locales/en';
import {
  type NexTableDefinedTableOptions,
  type NexRowData,
  type NexTableTableOptions,
} from '../types';

export const MRT_DefaultColumn = {
  filterVariant: 'text',
  maxSize: 1000,
  minSize: 40,
  size: 180,
} as const;

export const MRT_DefaultDisplayColumn = {
  columnDefType: 'display',
  enableClickToCopy: false,
  enableColumnActions: false,
  enableColumnDragging: false,
  enableColumnFilter: false,
  enableColumnOrdering: false,
  enableEditing: false,
  enableGlobalFilter: false,
  enableGrouping: false,
  enableHiding: false,
  enableResizing: false,
  enableSorting: false,
} as const;

export const useNexTableOptions: <TData extends NexRowData>(
  tableOptions: NexTableTableOptions<TData>,
) => NexTableDefinedTableOptions<TData> = <TData extends NexRowData>({
  aggregationFns,
  autoResetExpanded = false,
  columnFilterDisplayMode = 'subheader',
  columnResizeDirection,
  columnResizeMode = 'onChange',
  createDisplayMode = 'modal',
  defaultColumn,
  defaultDisplayColumn,
  editDisplayMode = 'modal',
  enableBatchRowSelection = true,
  enableBottomToolbar = true,
  enableColumnActions = true,
  enableColumnFilters = true,
  enableColumnOrdering = false,
  enableColumnPinning = false,
  enableColumnResizing = false,
  enableColumnVirtualization,
  enableDensityToggle = true,
  enableExpandAll = true,
  enableExpanding,
  enableFacetedValues = false,
  enableFilterMatchHighlighting = true,
  enableFilters = true,
  enableFullScreenToggle = true,
  enableGlobalFilter = true,
  enableGlobalFilterRankedResults = true,
  enableGrouping = false,
  enableHeaderActionsHoverReveal = false,
  enableHiding = true,
  enableMultiRowSelection = true,
  enableMultiSort = true,
  enablePagination = true,
  enableRowPinning = false,
  enableRowSelection = false,
  enableRowVirtualization,
  enableSelectAll = true,
  enableSorting = true,
  enableStickyHeader = false,
  enableTableFooter = true,
  enableTableHead = true,
  enableToolbarInternalActions = true,
  enableTopToolbar = true,
  filterFns,
  icons,
  layoutMode,
  localization,
  manualFiltering,
  manualGrouping,
  manualPagination,
  manualSorting,
  paginationDisplayMode = 'default',
  positionActionsColumn = 'first',
  positionCreatingRow = 'top',
  positionExpandColumn = 'first',
  positionGlobalFilter = 'right',
  positionPagination = 'bottom',
  positionToolbarAlertBanner = 'top',
  positionToolbarDropZone = 'top',
  rowNumberDisplayMode = 'static',
  rowPinningDisplayMode = 'sticky',
  selectAllMode = 'page',
  sortingFns,
  ...rest
}: NexTableTableOptions<TData>) => {
  const direction = useDirection();

  icons = useMemo(() => ({ ...MRT_Default_Icons, ...icons }), [icons]);
  localization = useMemo(
    () => ({
      ...MRT_Localization_EN,
      ...localization,
    }),
    [localization],
  );
  aggregationFns = useMemo(
    () => ({ ...NexTableAggregationFns, ...aggregationFns }),
    [],
  );
  filterFns = useMemo(() => ({ ...NexTableFilterFns, ...filterFns }), []);
  sortingFns = useMemo(() => ({ ...NexTableSortingFns, ...sortingFns }), []);
  defaultColumn = useMemo(
    () => ({ ...MRT_DefaultColumn, ...defaultColumn }),
    [defaultColumn],
  );
  defaultDisplayColumn = useMemo(
    () => ({
      ...MRT_DefaultDisplayColumn,
      ...defaultDisplayColumn,
    }),
    [defaultDisplayColumn],
  );
  //cannot be changed after initialization
  [enableColumnVirtualization, enableRowVirtualization] = useMemo(
    () => [enableColumnVirtualization, enableRowVirtualization],
    [],
  );

  if (!columnResizeDirection) {
    columnResizeDirection = direction.dir || 'ltr';
  }

  layoutMode =
    layoutMode || (enableColumnResizing ? 'grid-no-grow' : 'semantic');
  if (
    layoutMode === 'semantic' &&
    (enableRowVirtualization || enableColumnVirtualization)
  ) {
    layoutMode = 'grid';
  }

  if (enableRowVirtualization) {
    enableStickyHeader = true;
  }

  if (enablePagination === false && manualPagination === undefined) {
    manualPagination = true;
  }

  if (!rest.data?.length) {
    manualFiltering = true;
    manualGrouping = true;
    manualPagination = true;
    manualSorting = true;
  }

  return {
    aggregationFns,
    autoResetExpanded,
    columnFilterDisplayMode,
    columnResizeDirection,
    columnResizeMode,
    createDisplayMode,
    defaultColumn,
    defaultDisplayColumn,
    editDisplayMode,
    enableBatchRowSelection,
    enableBottomToolbar,
    enableColumnActions,
    enableColumnFilters,
    enableColumnOrdering,
    enableColumnPinning,
    enableColumnResizing,
    enableColumnVirtualization,
    enableDensityToggle,
    enableExpandAll,
    enableExpanding,
    enableFacetedValues,
    enableFilterMatchHighlighting,
    enableFilters,
    enableFullScreenToggle,
    enableGlobalFilter,
    enableGlobalFilterRankedResults,
    enableGrouping,
    enableHeaderActionsHoverReveal,
    enableHiding,
    enableMultiRowSelection,
    enableMultiSort,
    enablePagination,
    enableRowPinning,
    enableRowSelection,
    enableRowVirtualization,
    enableSelectAll,
    enableSorting,
    enableStickyHeader,
    enableTableFooter,
    enableTableHead,
    enableToolbarInternalActions,
    enableTopToolbar,
    filterFns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel:
      enableExpanding || enableGrouping ? getExpandedRowModel() : undefined,
    getFacetedMinMaxValues: enableFacetedValues
      ? getFacetedMinMaxValues()
      : undefined,
    getFacetedRowModel: enableFacetedValues ? getFacetedRowModel() : undefined,
    getFacetedUniqueValues: enableFacetedValues
      ? getFacetedUniqueValues()
      : undefined,
    getFilteredRowModel:
      enableColumnFilters || enableGlobalFilter || enableFilters
        ? getFilteredRowModel()
        : undefined,
    getGroupedRowModel: enableGrouping ? getGroupedRowModel() : undefined,
    getPaginationRowModel: enablePagination
      ? getPaginationRowModel()
      : undefined,
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    getSubRows: (row) => row?.subRows,
    icons,
    layoutMode,
    localization,
    manualFiltering,
    manualGrouping,
    manualPagination,
    manualSorting,
    paginationDisplayMode,
    positionActionsColumn,
    positionCreatingRow,
    positionExpandColumn,
    positionGlobalFilter,
    positionPagination,
    positionToolbarAlertBanner,
    positionToolbarDropZone,
    rowNumberDisplayMode,
    rowPinningDisplayMode,
    selectAllMode,
    sortingFns,
    ...rest,
  } as NexTableDefinedTableOptions<TData>;
};
