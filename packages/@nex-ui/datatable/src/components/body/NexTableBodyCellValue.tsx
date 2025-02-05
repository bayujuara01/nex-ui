import { Highlight, type HighlightProps } from '@nex-ui/core';

import {
  type NexTableCell,
  type NexTableCellValue,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';

const allowedTypes = ['string', 'number'];
const allowedFilterVariants = ['text', 'autocomplete'];

interface Props<TData extends NexRowData, TValue = NexTableCellValue> {
  cell: NexTableCell<TData, TValue>;
  renderedColumnIndex?: number;
  renderedRowIndex?: number;
  table: NexTableTableInstance<TData>;
}

export const NexTableBodyCellValue = <TData extends NexRowData>({
  cell,
  renderedColumnIndex = 0,
  renderedRowIndex = 0,
  table,
}: Props<TData>) => {
  const {
    getState,
    options: { enableFilterMatchHighlighting, mantineHighlightProps },
  } = table;
  const { column, row } = cell;
  const { columnDef } = column;
  const { globalFilter, globalFilterFn } = getState();
  const filterValue = column.getFilterValue();

  const highlightProps = parseFromValuesOrFunc(mantineHighlightProps, {
    cell,
    column,
    row,
    table,
  }) as Partial<HighlightProps>;

  let renderedCellValue =
    cell.getIsAggregated() && columnDef.AggregatedCell
      ? columnDef.AggregatedCell({
          cell,
          column,
          row,
          table,
        })
      : row.getIsGrouped() && !cell.getIsGrouped()
        ? null
        : cell.getIsGrouped() && columnDef.GroupedCell
          ? columnDef.GroupedCell({
              cell,
              column,
              row,
              table,
            })
          : undefined;

  const isGroupedValue = renderedCellValue !== undefined;

  if (!isGroupedValue) {
    renderedCellValue = cell.renderValue() as number | string;
  }

  if (
    enableFilterMatchHighlighting &&
    columnDef.enableFilterMatchHighlighting !== false &&
    renderedCellValue &&
    allowedTypes.includes(typeof renderedCellValue) &&
    ((filterValue &&
      allowedTypes.includes(typeof filterValue) &&
      allowedFilterVariants.includes(columnDef.filterVariant as string)) ||
      (globalFilter &&
        allowedTypes.includes(typeof globalFilter) &&
        column.getCanGlobalFilter()))
  ) {
    let highlight: string | string[] = (
      column.getFilterValue() ??
      globalFilter ??
      ''
    ).toString() as string;
    if ((filterValue ? columnDef._filterFn : globalFilterFn) === 'fuzzy') {
      highlight = highlight.split(' ');
    }

    renderedCellValue = (
      <Highlight color="yellow.3" highlight={highlight} {...highlightProps}>
        {renderedCellValue?.toString()}
      </Highlight>
    );
  }

  if (columnDef.Cell && !isGroupedValue) {
    renderedCellValue = columnDef.Cell({
      cell,
      column,
      renderedCellValue,
      renderedColumnIndex,
      renderedRowIndex,
      row,
      table,
    });
  }

  return renderedCellValue;
};
