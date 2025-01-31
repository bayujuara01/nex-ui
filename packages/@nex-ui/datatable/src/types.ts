import {
  type Dispatch,
  type HTMLProps,
  type MutableRefObject,
  type ReactNode,
  type RefObject,
  type SetStateAction,
} from 'react';

import {
  type AccessorFn,
  type AggregationFn,
  type Cell,
  type Column,
  type ColumnDef,
  type ColumnFiltersState,
  type ColumnOrderState,
  type ColumnPinningState,
  type ColumnSizingInfoState,
  type ColumnSizingState,
  type DeepKeys,
  type DeepValue,
  type ExpandedState,
  type FilterFn,
  type GroupingState,
  type Header,
  type HeaderGroup,
  type OnChangeFn,
  type PaginationState,
  type Row,
  type RowSelectionState,
  type SortingFn,
  type SortingState,
  type Table,
  type TableOptions,
  type TableState,
  type Updater,
  type VisibilityState,
} from '@tanstack/react-table';
import {
  type VirtualItem,
  type Virtualizer,
  type VirtualizerOptions,
} from '@tanstack/react-virtual';

import {
  type ActionIconProps,
  type AlertProps,
  type AutocompleteProps,
  type BadgeProps,
  type BoxProps,
  type CheckboxProps,
  type HighlightProps,
  type LoadingOverlayProps,
  type ModalProps,
  type MultiSelectProps,
  type PaginationProps,
  type PaperProps,
  type ProgressProps,
  type RadioProps,
  type RangeSliderProps,
  type SelectProps,
  type SkeletonProps,
  type SwitchProps,
  type TableProps,
  type TableTbodyProps,
  type TableTdProps,
  type TableTfootProps,
  type TableTheadProps,
  type TableThProps,
  type TableTrProps,
  type TextInputProps,
  type UnstyledButtonProps,
} from '@nex-ui/core';
import { type DateInputProps } from '@nex-ui/dates';

import { type NexTableAggregationFns } from './fns/aggregationFns';
import { type NexTableFilterFns } from './fns/filterFns';
import { type NexTableSortingFns } from './fns/sortingFns';
import { type MRT_Icons } from './icons';

export type { MRT_Icons };

export type LiteralUnion<T extends U, U = string> =
  | (Record<never, never> & U)
  | T;

export type Prettify<T> = { [K in keyof T]: T[K] } & unknown;

export type Xor<A, B> =
  | Prettify<{ [k in keyof A]?: never } & B>
  | Prettify<{ [k in keyof B]?: never } & A>;

export type HTMLPropsRef<T extends HTMLElement> = {
  ref?: MutableRefObject<null | T> | null;
} & Omit<
  HTMLProps<T>,
  'color' | 'data' | 'label' | 'ref' | 'size' | 'style' | 'type'
>;

export type MantineShade = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type NexTablePaginationProps = {
  rowsPerPageOptions?: string[];
  showRowsPerPage?: boolean;
} & Partial<PaginationProps>;

export type NexTableDensityState = 'md' | 'xl' | 'xs';

export type NexTableColumnFilterFnsState = Record<string, NexTableFilterOption>;

export type NexRowData = Record<string, any>;

export type NexTableCellValue = unknown;

export type NexTableColumnFiltersState = ColumnFiltersState;
export type NexTableColumnOrderState = ColumnOrderState;
export type NexTableColumnPinningState = ColumnPinningState;
export type NexTableColumnSizingInfoState = ColumnSizingInfoState;
export type NexTableColumnSizingState = ColumnSizingState;
export type NexTableExpandedState = ExpandedState;
export type NexTableGroupingState = GroupingState;
export type NexTablePaginationState = PaginationState;
export type NexTableRowSelectionState = RowSelectionState;
export type NexTableSortingState = SortingState;
export type NexTableUpdater<T> = Updater<T>;
export type NexTableVirtualItem = VirtualItem;
export type NexTableVisibilityState = VisibilityState;

export type NexTableVirtualizerOptions<
  TScrollElement extends Element | Window = Element | Window,
  TItemElement extends Element = Element,
> = VirtualizerOptions<TScrollElement, TItemElement>;

export type NexTableColumnVirtualizer<
  TScrollElement extends Element | Window = HTMLDivElement,
  TItemElement extends Element = HTMLTableCellElement,
> = {
  virtualColumns: NexTableVirtualItem[];
  virtualPaddingLeft?: number;
  virtualPaddingRight?: number;
} & Virtualizer<TScrollElement, TItemElement>;

export type NexTableRowVirtualizer<
  TScrollElement extends Element | Window = HTMLDivElement,
  TItemElement extends Element = HTMLTableRowElement,
> = {
  virtualRows: NexTableVirtualItem[];
} & Virtualizer<TScrollElement, TItemElement>;

export type NexTableColumnHelper<TData extends NexRowData> = {
  accessor: <
    TAccessor extends AccessorFn<TData> | DeepKeys<TData>,
    TValue extends TAccessor extends AccessorFn<TData, infer TReturn>
      ? TReturn
      : TAccessor extends DeepKeys<TData>
        ? DeepValue<TData, TAccessor>
        : never,
  >(
    accessor: TAccessor,
    column: NexTableDisplayColumnDef<TData, TValue>,
  ) => NexTableColumnDef<TData, TValue>;
  display: (column: NexTableDisplayColumnDef<TData>) => NexTableColumnDef<TData>;
  group: (column: NexTableGroupColumnDef<TData>) => NexTableColumnDef<TData>;
};

export interface MRT_Localization {
  actions: string;
  and: string;
  cancel: string;
  changeFilterMode: string;
  changeSearchMode: string;
  clearFilter: string;
  clearSearch: string;
  clearSelection: string;
  clearSort: string;
  clickToCopy: string;
  collapse: string;
  collapseAll: string;
  columnActions: string;
  copiedToClipboard: string;
  copy: string;
  dropToGroupBy: string;
  edit: string;
  expand: string;
  expandAll: string;
  filterArrIncludes: string;
  filterArrIncludesAll: string;
  filterArrIncludesSome: string;
  filterBetween: string;
  filterBetweenInclusive: string;
  filterByColumn: string;
  filterContains: string;
  filterEmpty: string;
  filterEndsWith: string;
  filterEquals: string;
  filterEqualsString: string;
  filterFuzzy: string;
  filterGreaterThan: string;
  filterGreaterThanOrEqualTo: string;
  filterIncludesString: string;
  filterIncludesStringSensitive: string;
  filteringByColumn: string;
  filterInNumberRange: string;
  filterLessThan: string;
  filterLessThanOrEqualTo: string;
  filterMode: string;
  filterNotEmpty: string;
  filterNotEquals: string;
  filterStartsWith: string;
  filterWeakEquals: string;
  goToFirstPage: string;
  goToLastPage: string;
  goToNextPage: string;
  goToPreviousPage: string;
  grab: string;
  groupByColumn: string;
  groupedBy: string;
  hideAll: string;
  hideColumn: string;
  max: string;
  min: string;
  move: string;
  noRecordsToDisplay: string;
  noResultsFound: string;
  of: string;
  or: string;
  pin: string;
  pinToLeft: string;
  pinToRight: string;
  resetColumnSize: string;
  resetOrder: string;
  rowActions: string;
  rowNumber: string;
  rowNumbers: string;
  rowsPerPage: string;
  save: string;
  search: string;
  select: string;
  selectedCountOfRowCountRowsSelected: string;
  showAll: string;
  showAllColumns: string;
  showHideColumns: string;
  showHideFilters: string;
  showHideSearch: string;
  sortByColumnAsc: string;
  sortByColumnDesc: string;
  sortedByColumnAsc: string;
  sortedByColumnDesc: string;
  thenBy: string;
  toggleDensity: string;
  toggleFullScreen: string;
  toggleSelectAll: string;
  toggleSelectRow: string;
  toggleVisibility: string;
  ungroupByColumn: string;
  unpin: string;
  unpinAll: string;
}

export interface NexTableRowModel<TData extends NexRowData> {
  flatRows: NexTableRow<TData>[];
  rows: NexTableRow<TData>[];
  rowsById: { [key: string]: NexTableRow<TData> };
}

export type NexTableTableInstance<TData extends NexRowData> = {
  getAllColumns: () => NexTableColumn<TData>[];
  getAllFlatColumns: () => NexTableColumn<TData>[];
  getAllLeafColumns: () => NexTableColumn<TData>[];
  getBottomRows: () => NexTableRow<TData>[];
  getCenterLeafColumns: () => NexTableColumn<TData>[];
  getCenterRows: () => NexTableRow<TData>[];
  getColumn: (columnId: string) => NexTableColumn<TData>;
  getExpandedRowModel: () => NexTableRowModel<TData>;
  getFilteredSelectedRowModel: () => NexTableRowModel<TData>;
  getFlatHeaders: () => NexTableHeader<TData>[];
  getHeaderGroups: () => NexTableHeaderGroup<TData>[];
  getLeftLeafColumns: () => NexTableColumn<TData>[];
  getPaginationRowModel: () => NexTableRowModel<TData>;
  getPreFilteredRowModel: () => NexTableRowModel<TData>;
  getPrePaginationRowModel: () => NexTableRowModel<TData>;
  getRightLeafColumns: () => NexTableColumn<TData>[];
  getRowModel: () => NexTableRowModel<TData>;
  getSelectedRowModel: () => NexTableRowModel<TData>;
  getState: () => NexTableTableState<TData>;
  getTopRows: () => NexTableRow<TData>[];
  options: NexTableStatefulTableOptions<TData>;
  refs: {
    bottomToolbarRef: MutableRefObject<HTMLDivElement | null>;
    editInputRefs: MutableRefObject<Record<string, HTMLInputElement>>;
    filterInputRefs: MutableRefObject<Record<string, HTMLInputElement>>;
    lastSelectedRowId: MutableRefObject<null | string>;
    searchInputRef: MutableRefObject<HTMLInputElement | null>;
    tableContainerRef: MutableRefObject<HTMLDivElement | null>;
    tableFooterRef: MutableRefObject<HTMLTableSectionElement | null>;
    tableHeadCellRefs: MutableRefObject<Record<string, HTMLTableCellElement>>;
    tableHeadRef: MutableRefObject<HTMLTableSectionElement | null>;
    tablePaperRef: MutableRefObject<HTMLDivElement | null>;
    topToolbarRef: MutableRefObject<HTMLDivElement | null>;
  };
  setColumnFilterFns: Dispatch<SetStateAction<NexTableColumnFilterFnsState>>;
  setCreatingRow: Dispatch<SetStateAction<NexTableRow<TData> | null | true>>;
  setDensity: Dispatch<SetStateAction<NexTableDensityState>>;
  setDraggingColumn: Dispatch<SetStateAction<NexTableColumn<TData> | null>>;
  setDraggingRow: Dispatch<SetStateAction<NexTableRow<TData> | null>>;
  setEditingCell: Dispatch<SetStateAction<NexTableCell<TData> | null>>;
  setEditingRow: Dispatch<SetStateAction<NexTableRow<TData> | null>>;
  setGlobalFilterFn: Dispatch<SetStateAction<NexTableFilterOption>>;
  setHoveredColumn: Dispatch<SetStateAction<null | Partial<NexTableColumn<TData>>>>;
  setHoveredRow: Dispatch<SetStateAction<null | Partial<NexTableRow<TData>>>>;
  setIsFullScreen: Dispatch<SetStateAction<boolean>>;
  setShowAlertBanner: Dispatch<SetStateAction<boolean>>;
  setShowColumnFilters: Dispatch<SetStateAction<boolean>>;
  setShowGlobalFilter: Dispatch<SetStateAction<boolean>>;
  setShowToolbarDropZone: Dispatch<SetStateAction<boolean>>;
} & Omit<
  Table<TData>,
  | 'getAllColumns'
  | 'getAllFlatColumns'
  | 'getAllLeafColumns'
  | 'getBottomRows'
  | 'getCenterLeafColumns'
  | 'getCenterRows'
  | 'getColumn'
  | 'getExpandedRowModel'
  | 'getFlatHeaders'
  | 'getHeaderGroups'
  | 'getLeftLeafColumns'
  | 'getPaginationRowModel'
  | 'getPreFilteredRowModel'
  | 'getPrePaginationRowModel'
  | 'getRightLeafColumns'
  | 'getRowModel'
  | 'getSelectedRowModel'
  | 'getState'
  | 'getTopRows'
  | 'options'
>;

export type NexTableDefinedTableOptions<TData extends NexRowData> = {
  icons: MRT_Icons;
  localization: MRT_Localization;
} & Omit<NexTableTableOptions<TData>, 'icons' | 'localization'>;

export type NexTableStatefulTableOptions<TData extends NexRowData> = {
  state: Pick<
    NexTableTableState<TData>,
    | 'columnFilterFns'
    | 'columnOrder'
    | 'columnSizingInfo'
    | 'creatingRow'
    | 'density'
    | 'draggingColumn'
    | 'draggingRow'
    | 'editingCell'
    | 'editingRow'
    | 'globalFilterFn'
    | 'grouping'
    | 'hoveredColumn'
    | 'hoveredRow'
    | 'isFullScreen'
    | 'pagination'
    | 'showAlertBanner'
    | 'showColumnFilters'
    | 'showGlobalFilter'
    | 'showToolbarDropZone'
  >;
} & NexTableDefinedTableOptions<TData>;

export type NexTableTableState<TData extends NexRowData> = Prettify<
  {
    columnFilterFns: NexTableColumnFilterFnsState;
    creatingRow: NexTableRow<TData> | null;
    density: NexTableDensityState;
    draggingColumn: NexTableColumn<TData> | null;
    draggingRow: NexTableRow<TData> | null;
    editingCell: NexTableCell<TData> | null;
    editingRow: NexTableRow<TData> | null;
    globalFilterFn: NexTableFilterOption;
    hoveredColumn: null | Partial<NexTableColumn<TData>>;
    hoveredRow: null | Partial<NexTableRow<TData>>;
    isFullScreen: boolean;
    isLoading: boolean;
    isSaving: boolean;
    showAlertBanner: boolean;
    showColumnFilters: boolean;
    showGlobalFilter: boolean;
    showLoadingOverlay: boolean;
    showProgressBars: boolean;
    showSkeletons: boolean;
    showToolbarDropZone: boolean;
  } & TableState
>;

export type NexTableColumnDef<TData extends NexRowData, TValue = unknown> = {
  /**
   * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
   * Specify a function here to point to the correct property in the data object.
   *
   * @example accessorFn: (row) => row.username
   */
  accessorFn?: (originalRow: TData) => any;
  /**
   * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
   * Specify which key in the row this column should use to access the correct data.
   * Also supports Deep Key Dot Notation.
   *
   * @example accessorKey: 'username' //simple
   * @example accessorKey: 'name.firstName' //deep key dot notation
   */
  accessorKey?: ({} & string) | DeepKeys<TData>;
  AggregatedCell?: (props: {
    cell: NexTableCell<TData, TValue>;
    column: NexTableColumn<TData, TValue>;
    row: NexTableRow<TData>;
    table: NexTableTableInstance<TData>;
  }) => ReactNode;
  aggregationFn?: Array<NexTableAggregationFn<TData>> | NexTableAggregationFn<TData>;
  Cell?: (props: {
    cell: NexTableCell<TData, TValue>;
    column: NexTableColumn<TData, TValue>;
    renderedCellValue: number | ReactNode | string;
    renderedColumnIndex?: number;
    renderedRowIndex?: number;
    row: NexTableRow<TData>;
    rowRef?: RefObject<HTMLTableRowElement | null>;
    table: NexTableTableInstance<TData>;
  }) => ReactNode;
  /**
   * Specify what type of column this is. Either `data`, `display`, or `group`. Defaults to `data`.
   * Leave this blank if you are just creating a normal data column.
   *
   * @default 'data'
   *
   * @example columnDefType: 'display'
   */
  columnDefType?: 'data' | 'display' | 'group';
  columnFilterModeOptions?: Array<
    LiteralUnion<NexTableFilterOption & string>
  > | null;
  columns?: NexTableColumnDef<TData>[];
  Edit?: (props: {
    cell: NexTableCell<TData, TValue>;
    column: NexTableColumn<TData, TValue>;
    row: NexTableRow<TData>;
    table: NexTableTableInstance<TData>;
  }) => ReactNode;
  editVariant?: 'multi-select' | 'select' | 'text';
  enableCellHoverReveal?: boolean;
  enableClickToCopy?: ((cell: NexTableCell<TData>) => boolean) | boolean;
  enableColumnActions?: boolean;
  enableColumnDragging?: boolean;
  enableColumnFilterModes?: boolean;
  enableColumnOrdering?: boolean;
  enableEditing?: ((row: NexTableRow<TData>) => boolean) | boolean;
  enableFilterMatchHighlighting?: boolean;
  Filter?: (props: {
    column: NexTableColumn<TData, TValue>;
    header: NexTableHeader<TData>;
    rangeFilterIndex?: number;
    table: NexTableTableInstance<TData>;
  }) => ReactNode;
  filterFn?: NexTableFilterFn<TData>;
  filterTooltipValueFn?: NexTableFilterTooltipValueFn;
  filterVariant?:
    | 'autocomplete'
    | 'checkbox'
    | 'date'
    | 'date-range'
    | 'multi-select'
    | 'range'
    | 'range-slider'
    | 'select'
    | 'text';
  Footer?:
    | ((props: {
        column: NexTableColumn<TData, TValue>;
        footer: NexTableHeader<TData>;
        table: NexTableTableInstance<TData>;
      }) => ReactNode)
    | ReactNode;
  /**
   * footer must be a string. If you want custom JSX to render the footer, you can also specify a `Footer` option. (Capital F)
   */
  footer?: string;
  GroupedCell?: (props: {
    cell: NexTableCell<TData, TValue>;
    column: NexTableColumn<TData, TValue>;
    row: NexTableRow<TData>;
    table: NexTableTableInstance<TData>;
  }) => ReactNode;
  /**
   * If `layoutMode` is `'grid'` or `'grid-no-grow'`, you can specify the flex grow value for individual columns to still grow and take up remaining space, or set to `false`/0 to not grow.
   */
  grow?: boolean | number;
  Header?:
    | ((props: {
        column: NexTableColumn<TData, TValue>;
        header: NexTableHeader<TData>;
        table: NexTableTableInstance<TData>;
      }) => ReactNode)
    | ReactNode;
  /**
   * header must be a string. If you want custom JSX to render the header, you can also specify a `Header` option. (Capital H)
   */
  header: string;
  /**
   * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
   *
   * If you have also specified an `accessorFn`, MRT still needs to have a valid `id` to be able to identify the column uniquely.
   *
   * `id` defaults to the `accessorKey` or `header` if not specified.
   *
   * @default gets set to the same value as `accessorKey` by default
   */
  id?: LiteralUnion<keyof TData & string>;
  mantineColumnActionsButtonProps?:
    | ((props: {
        column: NexTableColumn<TData, TValue>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>)
    | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
  mantineColumnDragHandleProps?:
    | ((props: {
        column: NexTableColumn<TData, TValue>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>)
    | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
  mantineCopyButtonProps?:
    | ((props: {
        cell: NexTableCell<TData, TValue>;
        column: NexTableColumn<TData, TValue>;
        row: NexTableRow<TData>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>)
    | (HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>);
  mantineEditSelectProps?:
    | ((props: {
        cell: NexTableCell<TData, TValue>;
        column: NexTableColumn<TData, TValue>;
        row: NexTableRow<TData>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>);
  mantineEditTextInputProps?:
    | ((props: {
        cell: NexTableCell<TData, TValue>;
        column: NexTableColumn<TData, TValue>;
        row: NexTableRow<TData>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
  mantineFilterAutocompleteProps?:
    | ((props: {
        column: NexTableColumn<TData, TValue>;
        rangeFilterIndex?: number;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>);
  mantineFilterCheckboxProps?:
    | ((props: {
        column: NexTableColumn<TData, TValue>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
  mantineFilterDateInputProps?:
    | ((props: {
        column: NexTableColumn<TData, TValue>;
        rangeFilterIndex?: number;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>);
  mantineFilterMultiSelectProps?:
    | ((props: {
        column: NexTableColumn<TData, TValue>;
        rangeFilterIndex?: number;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>);
  mantineFilterRangeSliderProps?:
    | ((props: {
        column: NexTableColumn<TData, TValue>;
        rangeFilterIndex?: number;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>);
  mantineFilterSelectProps?:
    | ((props: {
        column: NexTableColumn<TData, TValue>;
        rangeFilterIndex?: number;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>);
  mantineFilterTextInputProps?:
    | ((props: {
        column: NexTableColumn<TData, TValue>;
        rangeFilterIndex?: number;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
  mantineTableBodyCellProps?:
    | ((props: {
        cell: NexTableCell<TData, TValue>;
        column: NexTableColumn<TData, TValue>;
        renderedRowIndex?: number;
        row: NexTableRow<TData>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableCellElement> & TableTdProps)
    | (HTMLPropsRef<HTMLTableCellElement> & TableTdProps);
  mantineTableFooterCellProps?:
    | ((props: {
        column: NexTableColumn<TData, TValue>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableCellElement> & TableThProps)
    | (HTMLPropsRef<HTMLTableCellElement> & TableThProps);
  mantineTableHeadCellProps?:
    | ((props: {
        column: NexTableColumn<TData, TValue>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableCellElement> & TableThProps)
    | (HTMLPropsRef<HTMLTableCellElement> & TableThProps);
  PlaceholderCell?: (props: {
    cell: NexTableCell<TData, TValue>;
    column: NexTableColumn<TData, TValue>;
    row: NexTableRow<TData>;
    table: NexTableTableInstance<TData>;
  }) => ReactNode;
  renderColumnActionsMenuItems?: (props: {
    column: NexTableColumn<TData, TValue>;
    internalColumnMenuItems: ReactNode;
    table: NexTableTableInstance<TData>;
  }) => ReactNode;
  renderColumnFilterModeMenuItems?: (props: {
    column: NexTableColumn<TData, TValue>;
    internalFilterOptions: NexTableInternalFilterOption[];
    onSelectFilterMode: (filterMode: NexTableFilterOption) => void;
    table: NexTableTableInstance<TData>;
  }) => ReactNode;
  sortingFn?: NexTableSortingFn<TData>;
  visibleInShowHideMenu?: boolean;
} & Omit<
  ColumnDef<TData, TValue>,
  | 'accessorKey'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'cell'
  | 'columns'
  | 'filterFn'
  | 'footer'
  | 'header'
  | 'id'
  | 'sortingFn'
>;

export type NexTableDisplayColumnDef<
  TData extends NexRowData,
  TValue = unknown,
> = Omit<NexTableColumnDef<TData, TValue>, 'accessorFn' | 'accessorKey'>;

export type NexTableGroupColumnDef<TData extends NexRowData> = {
  columns: NexTableColumnDef<TData>[];
} & NexTableDisplayColumnDef<TData, any>;

export type NexTableDefinedColumnDef<
  TData extends NexRowData,
  TValue = unknown,
> = {
  _filterFn: NexTableFilterOption;
  defaultDisplayColumn: Partial<NexTableColumnDef<TData, TValue>>;
  id: string;
} & Omit<NexTableColumnDef<TData, TValue>, 'defaultDisplayColumn' | 'id'>;

export type NexTableColumn<TData extends NexRowData, TValue = unknown> = {
  columnDef: NexTableDefinedColumnDef<TData, TValue>;
  columns?: NexTableColumn<TData>[];
  filterFn?: NexTableFilterFn<TData>;
  footer: string;
  header: string;
} & Omit<
  Column<TData, NexTableCellValue>,
  'columnDef' | 'columns' | 'filterFn' | 'footer' | 'header'
>;

export type NexTableHeader<TData extends NexRowData, TValue = unknown> = {
  column: NexTableColumn<TData, TValue>;
} & Omit<Header<TData, NexTableCellValue>, 'column'>;

export type NexTableHeaderGroup<TData extends NexRowData> = {
  headers: NexTableHeader<TData>[];
} & Omit<HeaderGroup<TData>, 'headers'>;

export type NexTableRow<TData extends NexRowData> = {
  _valuesCache: Record<LiteralUnion<DeepKeys<TData> & string>, any>;
  getAllCells: () => NexTableCell<TData>[];
  getVisibleCells: () => NexTableCell<TData>[];
  subRows?: NexTableRow<TData>[];
} & Omit<
  Row<TData>,
  '_valuesCache' | 'getAllCells' | 'getVisibleCells' | 'subRows'
>;

export type NexTableCell<TData extends NexRowData, TValue = unknown> = {
  column: NexTableColumn<TData, TValue>;
  row: NexTableRow<TData>;
} & Omit<Cell<TData, TValue>, 'column' | 'row'>;

export type NexTableAggregationOption = keyof typeof NexTableAggregationFns & string;

export type NexTableAggregationFn<TData extends NexRowData> =
  | AggregationFn<TData>
  | NexTableAggregationOption;

export type NexTableSortingOption = LiteralUnion<
  keyof typeof NexTableSortingFns & string
>;

export type NexTableSortingFn<TData extends NexRowData> =
  | NexTableSortingOption
  | SortingFn<TData>;

export type NexTableFilterOption = LiteralUnion<
  keyof typeof NexTableFilterFns & string
>;

export type NexTableFilterFn<TData extends NexRowData> =
  | FilterFn<TData>
  | NexTableFilterOption;

export type NexTableFilterTooltipValueFn<TValue = any> = (value: TValue) => string;

export type NexTableInternalFilterOption = {
  divider: boolean;
  label: string;
  option: string;
  symbol: string;
};

export type NexTableDisplayColumnIds =
  | 'mrt-row-actions'
  | 'mrt-row-drag'
  | 'mrt-row-expand'
  | 'mrt-row-numbers'
  | 'mrt-row-pin'
  | 'mrt-row-select'
  | 'mrt-row-spacer';

export type NexTableCreateTableFeature<
  TData extends NexRowData,
  TFeature = any,
> = (table: NexTableTableInstance<TData>) => TFeature;

/**
 * `columns` and `data` props are the only required props, but there are over 150 other optional props.
 *
 * See more info on creating columns and data on the official docs site:
 * @link https://www.mantine-react-table.com/docs/getting-started/usage
 *
 * See the full props list on the official docs site:
 * @link https://www.mantine-react-table.com/docs/api/table-options
 */
export type NexTableTableOptions<TData extends NexRowData> = {
  columnFilterDisplayMode?: 'custom' | 'popover' | 'subheader';
  columnFilterModeOptions?: Array<
    LiteralUnion<NexTableFilterOption & string>
  > | null;
  /**
   * The columns to display in the table. `accessorKey`s or `accessorFn`s must match keys in the `data` prop.
   *
   * See more info on creating columns on the official docs site:
   * @link https://www.mantine-react-table.com/docs/guides/data-columns
   * @link https://www.mantine-react-table.com/docs/guides/display-columns
   *
   * See all Columns Options on the official docs site:
   * @link https://www.mantine-react-table.com/docs/api/column-options
   */
  columns: NexTableColumnDef<TData>[];
  columnVirtualizerInstanceRef?: MutableRefObject<null | Virtualizer<
    HTMLDivElement,
    HTMLTableCellElement
  >>;
  columnVirtualizerOptions?:
    | ((props: {
        table: NexTableTableInstance<TData>;
      }) => Partial<VirtualizerOptions<HTMLDivElement, HTMLTableCellElement>>)
    | Partial<VirtualizerOptions<HTMLDivElement, HTMLTableCellElement>>;
  createDisplayMode?: 'custom' | 'modal' | 'row';
  /**
   * Pass your data as an array of objects. Objects can theoretically be any shape, but it's best to keep them consistent.
   *
   * See the usage guide for more info on creating columns and data:
   * @link https://www.mantine-react-table.com/docs/getting-started/usage
   */
  data: TData[];
  /**
   * Instead of specifying a bunch of the same options for each column, you can just change an option in the `defaultColumn` prop to change a default option for all columns.
   */
  defaultColumn?: Partial<NexTableColumnDef<TData>>;
  /**
   * Change the default options for display columns.
   */
  defaultDisplayColumn?: Partial<NexTableDisplayColumnDef<TData>>;
  displayColumnDefOptions?: Partial<{
    [key in NexTableDisplayColumnIds]: Partial<NexTableDisplayColumnDef<TData>>;
  }>;
  editDisplayMode?: 'cell' | 'custom' | 'modal' | 'row' | 'table';
  enableBatchRowSelection?: boolean;
  enableBottomToolbar?: boolean;
  enableClickToCopy?: ((cell: NexTableCell<TData>) => boolean) | boolean;
  enableColumnActions?: boolean;
  enableColumnDragging?: boolean;
  enableColumnFilterModes?: boolean;
  enableColumnOrdering?: boolean;
  enableColumnVirtualization?: boolean;
  enableDensityToggle?: boolean;
  enableEditing?: ((row: NexTableRow<TData>) => boolean) | boolean;
  enableExpandAll?: boolean;
  enableFacetedValues?: boolean;
  enableFilterMatchHighlighting?: boolean;
  enableFullScreenToggle?: boolean;
  enableGlobalFilterModes?: boolean;
  enableGlobalFilterRankedResults?: boolean;
  enableHeaderActionsHoverReveal?: boolean;
  enablePagination?: boolean;
  enableRowActions?: boolean;
  enableRowDragging?: boolean;
  enableRowNumbers?: boolean;
  enableRowOrdering?: boolean;
  enableRowSelection?: ((row: NexTableRow<TData>) => boolean) | boolean;
  enableRowVirtualization?: boolean;
  enableSelectAll?: boolean;
  enableStickyFooter?: boolean;
  enableStickyHeader?: boolean;
  enableTableFooter?: boolean;
  enableTableHead?: boolean;
  enableToolbarInternalActions?: boolean;
  enableTopToolbar?: boolean;
  expandRowsFn?: (dataRow: TData) => TData[];
  getRowId?: (
    originalRow: TData,
    index: number,
    parentRow: NexTableRow<TData>,
  ) => string | undefined;
  globalFilterFn?: NexTableFilterOption;
  globalFilterModeOptions?: NexTableFilterOption[] | null;
  icons?: Partial<MRT_Icons>;
  initialState?: Partial<NexTableTableState<TData>>;
  /**
   * Changes which kind of CSS layout is used to render the table. `semantic` uses default semantic HTML elements, while `grid` adds CSS grid and flexbox styles
   */
  layoutMode?: 'grid' | 'grid-no-grow' | 'semantic';
  /**
   * Pass in either a locale imported from `mantine-react-table/locales/*` or a custom locale object.
   *
   * See the localization (i18n) guide for more info:
   * @link https://www.mantine-react-table.com/docs/guides/localization
   */
  localization?: Partial<MRT_Localization>;
  mantineBottomToolbarProps?:
    | ((props: {
        table: NexTableTableInstance<TData>;
      }) => BoxProps & HTMLPropsRef<HTMLDivElement>)
    | (BoxProps & HTMLPropsRef<HTMLDivElement>);
  mantineColumnActionsButtonProps?:
    | ((props: {
        column: NexTableColumn<TData, NexTableCellValue>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>)
    | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
  mantineColumnDragHandleProps?:
    | ((props: {
        column: NexTableColumn<TData, NexTableCellValue>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>)
    | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
  mantineCopyButtonProps?:
    | ((props: {
        cell: NexTableCell<TData, NexTableCellValue>;
        column: NexTableColumn<TData, NexTableCellValue>;
        row: NexTableRow<TData>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>)
    | (HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>);
  mantineCreateRowModalProps?:
    | ((props: {
        row: NexTableRow<TData>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>)
    | (HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>);
  mantineDetailPanelProps?:
    | ((props: {
        row: NexTableRow<TData>;
        table: NexTableTableInstance<TData>;
      }) => BoxProps & HTMLPropsRef<HTMLTableCellElement>)
    | (BoxProps & HTMLPropsRef<HTMLTableCellElement>);
  mantineEditRowModalProps?:
    | ((props: {
        row: NexTableRow<TData>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>)
    | (HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>);
  mantineEditSelectProps?:
    | ((props: {
        cell: NexTableCell<TData, NexTableCellValue>;
        column: NexTableColumn<TData, NexTableCellValue>;
        row: NexTableRow<TData>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>);
  mantineEditTextInputProps?:
    | ((props: {
        cell: NexTableCell<TData, NexTableCellValue>;
        column: NexTableColumn<TData, NexTableCellValue>;
        row: NexTableRow<TData>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
  mantineExpandAllButtonProps?:
    | ((props: {
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>)
    | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
  mantineExpandButtonProps?:
    | ((props: {
        renderedRowIndex?: number;
        row: NexTableRow<TData>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>)
    | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
  mantineFilterAutocompleteProps?:
    | ((props: {
        column: NexTableColumn<TData, NexTableCellValue>;
        rangeFilterIndex?: number;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>);
  mantineFilterCheckboxProps?:
    | ((props: {
        column: NexTableColumn<TData, NexTableCellValue>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<CheckboxProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<CheckboxProps>);
  mantineFilterDateInputProps?:
    | ((props: {
        column: NexTableColumn<TData, NexTableCellValue>;
        rangeFilterIndex?: number;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>);
  mantineFilterMultiSelectProps?:
    | ((props: {
        column: NexTableColumn<TData, NexTableCellValue>;
        rangeFilterIndex?: number;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>);
  mantineFilterRangeSliderProps?:
    | ((props: {
        column: NexTableColumn<TData, NexTableCellValue>;
        rangeFilterIndex?: number;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>);
  mantineFilterSelectProps?:
    | ((props: {
        column: NexTableColumn<TData, NexTableCellValue>;
        rangeFilterIndex?: number;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>);
  mantineFilterTextInputProps?:
    | ((props: {
        column: NexTableColumn<TData, NexTableCellValue>;
        rangeFilterIndex?: number;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
  mantineHighlightProps?:
    | ((props: {
        cell: NexTableCell<TData, NexTableCellValue>;
        column: NexTableColumn<TData, NexTableCellValue>;
        row: NexTableRow<TData>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLSpanElement> & Partial<HighlightProps>)
    | (HTMLPropsRef<HTMLSpanElement> & Partial<HighlightProps>);
  mantineLoadingOverlayProps?:
    | ((props: {
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLDivElement> & Partial<LoadingOverlayProps>)
    | (HTMLPropsRef<HTMLDivElement> & Partial<LoadingOverlayProps>);
  mantinePaginationProps?:
    | ((props: {
        table: NexTableTableInstance<TData>;
      }) => Partial<HTMLPropsRef<HTMLDivElement> & NexTablePaginationProps>)
    | Partial<HTMLPropsRef<HTMLDivElement> & NexTablePaginationProps>;
  mantinePaperProps?:
    | ((props: {
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLDivElement> & PaperProps)
    | (HTMLPropsRef<HTMLDivElement> & PaperProps);
  mantineProgressProps?:
    | ((props: {
        isTopToolbar: boolean;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLDivElement> & ProgressProps)
    | (HTMLPropsRef<HTMLDivElement> & ProgressProps);
  mantineRowDragHandleProps?:
    | ((props: {
        row: NexTableRow<TData>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>)
    | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
  mantineSearchTextInputProps?:
    | ((props: {
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
  mantineSelectAllCheckboxProps?:
    | ((CheckboxProps | RadioProps | SwitchProps) &
        HTMLPropsRef<HTMLInputElement>)
    | ((props: {
        table: NexTableTableInstance<TData>;
      }) => (CheckboxProps | RadioProps | SwitchProps) &
        HTMLPropsRef<HTMLInputElement>);
  mantineSelectCheckboxProps?:
    | ((CheckboxProps | RadioProps | SwitchProps) &
        HTMLPropsRef<HTMLInputElement>)
    | ((props: {
        renderedRowIndex?: number;
        row: NexTableRow<TData>;
        table: NexTableTableInstance<TData>;
      }) => (CheckboxProps | RadioProps | SwitchProps) &
        HTMLPropsRef<HTMLInputElement>);
  mantineSkeletonProps?:
    | ((props: {
        cell: NexTableCell<TData, NexTableCellValue>;
        column: NexTableColumn<TData, NexTableCellValue>;
        row: NexTableRow<TData>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLDivElement> & SkeletonProps)
    | (HTMLPropsRef<HTMLDivElement> & SkeletonProps);
  mantineTableBodyCellProps?:
    | ((props: {
        cell: NexTableCell<TData, NexTableCellValue>;
        column: NexTableColumn<TData, NexTableCellValue>;
        renderedColumnIndex?: number;
        renderedRowIndex?: number;
        row: NexTableRow<TData>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableCellElement> & TableTdProps)
    | (HTMLPropsRef<HTMLTableCellElement> & TableTdProps);
  mantineTableBodyProps?:
    | ((props: {
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableSectionElement> & TableTbodyProps)
    | (HTMLPropsRef<HTMLTableSectionElement> & TableTbodyProps);
  mantineTableBodyRowProps?:
    | ((props: {
        isDetailPanel?: boolean;
        renderedRowIndex?: number;
        row: NexTableRow<TData>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableRowElement> & TableTrProps)
    | (HTMLPropsRef<HTMLTableRowElement> & TableTrProps);
  mantineTableContainerProps?:
    | ((props: {
        table: NexTableTableInstance<TData>;
      }) => BoxProps & HTMLPropsRef<HTMLDivElement>)
    | (BoxProps & HTMLPropsRef<HTMLDivElement>);
  mantineTableFooterCellProps?:
    | ((props: {
        column: NexTableColumn<TData, NexTableCellValue>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableCellElement> & TableThProps)
    | (HTMLPropsRef<HTMLTableCellElement> & TableThProps);
  mantineTableFooterProps?:
    | ((props: {
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableSectionElement> & TableTfootProps)
    | (HTMLPropsRef<HTMLTableSectionElement> & TableTfootProps);
  mantineTableFooterRowProps?:
    | ((props: {
        footerGroup: NexTableHeaderGroup<TData>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableRowElement> & TableTrProps)
    | (HTMLPropsRef<HTMLTableRowElement> & TableTrProps);
  mantineTableHeadCellProps?:
    | ((props: {
        column: NexTableColumn<TData, NexTableCellValue>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableCellElement> & TableThProps)
    | (HTMLPropsRef<HTMLTableCellElement> & TableThProps);
  mantineTableHeadProps?:
    | ((props: {
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableSectionElement> & TableTheadProps)
    | (HTMLPropsRef<HTMLTableSectionElement> & TableTheadProps);
  mantineTableHeadRowProps?:
    | ((props: {
        headerGroup: NexTableHeaderGroup<TData>;
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableRowElement> & TableTrProps)
    | (HTMLPropsRef<HTMLTableRowElement> & TableTrProps);
  mantineTableProps?:
    | ((props: {
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableElement> & TableProps)
    | (HTMLPropsRef<HTMLTableElement> & TableProps);
  mantineToolbarAlertBannerBadgeProps?:
    | ((props: {
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLDivElement> & Partial<BadgeProps>)
    | (HTMLPropsRef<HTMLDivElement> & Partial<BadgeProps>);
  mantineToolbarAlertBannerProps?:
    | ((props: {
        table: NexTableTableInstance<TData>;
      }) => HTMLPropsRef<HTMLDivElement> & Partial<AlertProps>)
    | (HTMLPropsRef<HTMLDivElement> & Partial<AlertProps>);
  mantineTopToolbarProps?:
    | ((props: {
        table: NexTableTableInstance<TData>;
      }) => BoxProps & HTMLPropsRef<HTMLDivElement>)
    | (BoxProps & HTMLPropsRef<HTMLDivElement>);
  /**
   * Memoize cells, rows, or the entire table body to potentially improve render performance.
   *
   * @warning This will break some dynamic rendering features. See the memoization guide for more info:
   * @link https://www.mantine-react-table.com/docs/guides/memoize-components
   */
  memoMode?: 'cells' | 'rows' | 'table-body';
  onColumnFilterFnsChange?: OnChangeFn<{ [key: string]: NexTableFilterOption }>;
  onCreatingRowCancel?: (props: {
    row: NexTableRow<TData>;
    table: NexTableTableInstance<TData>;
  }) => void;
  onCreatingRowChange?: OnChangeFn<NexTableRow<TData> | null>;
  onCreatingRowSave?: (props: {
    exitCreatingMode: () => void;
    row: NexTableRow<TData>;
    table: NexTableTableInstance<TData>;
    values: Record<LiteralUnion<DeepKeys<TData> & string>, any>;
  }) => void;
  onDensityChange?: OnChangeFn<NexTableDensityState>;
  onDraggingColumnChange?: OnChangeFn<NexTableColumn<TData> | null>;
  onDraggingRowChange?: OnChangeFn<NexTableRow<TData> | null>;
  onEditingCellChange?: OnChangeFn<NexTableCell<TData> | null>;
  onEditingRowCancel?: (props: {
    row: NexTableRow<TData>;
    table: NexTableTableInstance<TData>;
  }) => void;
  onEditingRowChange?: OnChangeFn<NexTableRow<TData> | null>;
  onEditingRowSave?: (props: {
    exitEditingMode: () => void;
    row: NexTableRow<TData>;
    table: NexTableTableInstance<TData>;
    values: Record<LiteralUnion<DeepKeys<TData> & string>, any>;
  }) => Promise<void> | void;
  onGlobalFilterFnChange?: OnChangeFn<NexTableFilterOption>;
  onHoveredColumnChange?: OnChangeFn<null | Partial<NexTableColumn<TData>>>;
  onHoveredRowChange?: OnChangeFn<null | Partial<NexTableRow<TData>>>;
  onIsFullScreenChange?: OnChangeFn<boolean>;
  onShowAlertBannerChange?: OnChangeFn<boolean>;
  onShowColumnFiltersChange?: OnChangeFn<boolean>;
  onShowGlobalFilterChange?: OnChangeFn<boolean>;
  onShowToolbarDropZoneChange?: OnChangeFn<boolean>;
  paginationDisplayMode?: 'custom' | 'default' | 'pages';
  positionActionsColumn?: 'first' | 'last';
  positionCreatingRow?: 'bottom' | 'top' | number;
  positionExpandColumn?: 'first' | 'last';
  positionGlobalFilter?: 'left' | 'none' | 'right';
  positionPagination?: 'both' | 'bottom' | 'none' | 'top';
  positionToolbarAlertBanner?: 'bottom' | 'head-overlay' | 'none' | 'top';
  positionToolbarDropZone?: 'both' | 'bottom' | 'none' | 'top';
  renderBottomToolbar?:
    | ((props: { table: NexTableTableInstance<TData> }) => ReactNode)
    | ReactNode;
  renderBottomToolbarCustomActions?: (props: {
    table: NexTableTableInstance<TData>;
  }) => ReactNode;
  renderColumnActionsMenuItems?: (props: {
    column: NexTableColumn<TData, NexTableCellValue>;
    internalColumnMenuItems: ReactNode;
    table: NexTableTableInstance<TData>;
  }) => ReactNode;
  renderColumnFilterModeMenuItems?: (props: {
    column: NexTableColumn<TData, NexTableCellValue>;
    internalFilterOptions: NexTableInternalFilterOption[];
    onSelectFilterMode: (filterMode: NexTableFilterOption) => void;
    table: NexTableTableInstance<TData>;
  }) => ReactNode;
  renderCreateRowModalContent?: (props: {
    internalEditComponents: ReactNode[];
    row: NexTableRow<TData>;
    table: NexTableTableInstance<TData>;
  }) => ReactNode;
  renderDetailPanel?: (props: {
    internalEditComponents: ReactNode[];
    row: NexTableRow<TData>;
    table: NexTableTableInstance<TData>;
  }) => ReactNode;
  renderEditRowModalContent?: (props: {
    internalEditComponents: ReactNode[];
    row: NexTableRow<TData>;
    table: NexTableTableInstance<TData>;
  }) => ReactNode;
  renderEmptyRowsFallback?: (props: {
    table: NexTableTableInstance<TData>;
  }) => ReactNode;
  renderGlobalFilterModeMenuItems?: (props: {
    internalFilterOptions: NexTableInternalFilterOption[];
    onSelectFilterMode: (filterMode: NexTableFilterOption) => void;
    table: NexTableTableInstance<TData>;
  }) => ReactNode;
  renderRowActionMenuItems?: (props: {
    renderedRowIndex?: number;
    row: NexTableRow<TData>;
    table: NexTableTableInstance<TData>;
  }) => ReactNode;
  renderRowActions?: (props: {
    cell: NexTableCell<TData, NexTableCellValue>;
    renderedRowIndex?: number;
    row: NexTableRow<TData>;
    table: NexTableTableInstance<TData>;
  }) => ReactNode;
  renderToolbarAlertBannerContent?: (props: {
    groupedAlert: null | ReactNode;
    selectedAlert: null | ReactNode;
    table: NexTableTableInstance<TData>;
  }) => ReactNode;
  renderToolbarInternalActions?: (props: {
    table: NexTableTableInstance<TData>;
  }) => ReactNode;
  renderTopToolbar?:
    | ((props: { table: NexTableTableInstance<TData> }) => ReactNode)
    | ReactNode;
  renderTopToolbarCustomActions?: (props: {
    table: NexTableTableInstance<TData>;
  }) => ReactNode;
  rowCount?: number;
  rowNumberDisplayMode?: 'original' | 'static';
  rowPinningDisplayMode?:
    | 'bottom'
    | 'select-bottom'
    | 'select-sticky'
    | 'select-top'
    | 'sticky'
    | 'top'
    | 'top-and-bottom';
  rowVirtualizerInstanceRef?: MutableRefObject<null | Virtualizer<
    HTMLDivElement,
    HTMLTableRowElement
  >>;
  rowVirtualizerOptions?:
    | ((props: {
        table: NexTableTableInstance<TData>;
      }) => Partial<VirtualizerOptions<HTMLDivElement, HTMLTableRowElement>>)
    | Partial<VirtualizerOptions<HTMLDivElement, HTMLTableRowElement>>;
  selectAllMode?: 'all' | 'page';
  selectDisplayMode?: 'checkbox' | 'radio' | 'switch';
  /**
   * Manage state externally any way you want, then pass it back into MRT.
   */
  state?: Partial<NexTableTableState<TData>>;
} & Omit<
  Partial<TableOptions<TData>>,
  | 'columns'
  | 'data'
  | 'defaultColumn'
  | 'enableRowSelection'
  | 'expandRowsFn'
  | 'getRowId'
  | 'globalFilterFn'
  | 'initialState'
  | 'onStateChange'
  | 'state'
>;
