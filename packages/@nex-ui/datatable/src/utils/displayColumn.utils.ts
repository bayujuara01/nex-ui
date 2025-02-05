import {
  type NexTableColumnDef,
  type NexTableDefinedTableOptions,
  type NexTableDisplayColumnIds,
  type MRT_Localization,
  type NexRowData,
  type NexTableStatefulTableOptions,
} from '../types';
import { getAllLeafColumnDefs, getColumnId } from './column.utils';

export function defaultDisplayColumnProps<TData extends NexRowData>({
  header,
  id,
  size,
  tableOptions,
}: {
  header?: keyof MRT_Localization;
  id: NexTableDisplayColumnIds;
  size: number;
  tableOptions: NexTableDefinedTableOptions<TData>;
}): NexTableColumnDef<TData> {
  const { defaultDisplayColumn, displayColumnDefOptions, localization } =
    tableOptions;
  return {
    ...defaultDisplayColumn,
    header: header ? localization[header]! : '',
    size,
    ...displayColumnDefOptions?.[id],
    id,
  };
}

export const showRowPinningColumn = <TData extends NexRowData>(
  tableOptions: NexTableStatefulTableOptions<TData>,
): boolean => {
  const { enableRowPinning, rowPinningDisplayMode } = tableOptions;
  return !!(enableRowPinning && !rowPinningDisplayMode?.startsWith('select'));
};

export const showRowDragColumn = <TData extends NexRowData>(
  tableOptions: NexTableStatefulTableOptions<TData>,
): boolean => {
  const { enableRowDragging, enableRowOrdering } = tableOptions;
  return !!(enableRowDragging || enableRowOrdering);
};

export const showRowExpandColumn = <TData extends NexRowData>(
  tableOptions: NexTableStatefulTableOptions<TData>,
): boolean => {
  const {
    enableExpanding,
    enableGrouping,
    renderDetailPanel,
    state: { grouping },
  } = tableOptions;
  return !!(
    enableExpanding ||
    (enableGrouping && grouping?.length) ||
    renderDetailPanel
  );
};

export const showRowActionsColumn = <TData extends NexRowData>(
  tableOptions: NexTableStatefulTableOptions<TData>,
): boolean => {
  const {
    createDisplayMode,
    editDisplayMode,
    enableEditing,
    enableRowActions,
    state: { creatingRow },
  } = tableOptions;
  return !!(
    enableRowActions ||
    (creatingRow && createDisplayMode === 'row') ||
    (enableEditing && ['modal', 'row'].includes(editDisplayMode ?? ''))
  );
};

export const showRowSelectionColumn = <TData extends NexRowData>(
  tableOptions: NexTableStatefulTableOptions<TData>,
): boolean => !!tableOptions.enableRowSelection;

export const showRowNumbersColumn = <TData extends NexRowData>(
  tableOptions: NexTableStatefulTableOptions<TData>,
): boolean => !!tableOptions.enableRowNumbers;

export const showRowSpacerColumn = <TData extends NexRowData>(
  tableOptions: NexTableStatefulTableOptions<TData>,
): boolean => tableOptions.layoutMode === 'grid-no-grow';

export const getLeadingDisplayColumnIds = <TData extends NexRowData>(
  tableOptions: NexTableStatefulTableOptions<TData>,
) =>
  [
    showRowPinningColumn(tableOptions) && 'mrt-row-pin',
    showRowDragColumn(tableOptions) && 'mrt-row-drag',
    tableOptions.positionActionsColumn === 'first' &&
      showRowActionsColumn(tableOptions) &&
      'mrt-row-actions',
    tableOptions.positionExpandColumn === 'first' &&
      showRowExpandColumn(tableOptions) &&
      'mrt-row-expand',
    showRowSelectionColumn(tableOptions) && 'mrt-row-select',
    showRowNumbersColumn(tableOptions) && 'mrt-row-numbers',
  ].filter(Boolean) as NexTableDisplayColumnIds[];

export const getTrailingDisplayColumnIds = <TData extends NexRowData>(
  tableOptions: NexTableStatefulTableOptions<TData>,
) =>
  [
    tableOptions.positionActionsColumn === 'last' &&
      showRowActionsColumn(tableOptions) &&
      'mrt-row-actions',
    tableOptions.positionExpandColumn === 'last' &&
      showRowExpandColumn(tableOptions) &&
      'mrt-row-expand',
    showRowSpacerColumn(tableOptions) && 'mrt-row-spacer',
  ].filter(Boolean) as NexTableDisplayColumnIds[];

export const getDefaultColumnOrderIds = <TData extends NexRowData>(
  tableOptions: NexTableStatefulTableOptions<TData>,
  reset = false,
) => {
  const {
    state: { columnOrder: currentColumnOrderIds = [] },
  } = tableOptions;

  const leadingDisplayColIds: string[] =
    getLeadingDisplayColumnIds(tableOptions);
  const trailingDisplayColIds: string[] =
    getTrailingDisplayColumnIds(tableOptions);

  const defaultColumnDefIds = getAllLeafColumnDefs(tableOptions.columns).map(
    (columnDef) => getColumnId(columnDef),
  );

  let allLeafColumnDefIds = reset
    ? defaultColumnDefIds
    : Array.from(new Set([...currentColumnOrderIds, ...defaultColumnDefIds]));

  allLeafColumnDefIds = allLeafColumnDefIds.filter(
    (colId) =>
      !leadingDisplayColIds.includes(colId) &&
      !trailingDisplayColIds.includes(colId),
  );

  return [
    ...leadingDisplayColIds,
    ...allLeafColumnDefIds,
    ...trailingDisplayColIds,
  ];
};
