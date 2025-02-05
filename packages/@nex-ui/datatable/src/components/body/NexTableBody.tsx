import clsx from 'clsx';

import classes from './NexTableBody.module.css';

import { memo, useMemo } from 'react';

import {
  type TableProps,
  TableTbody,
  type TableTbodyProps,
} from '@nex-ui/core';

import { NexTableBodyEmptyRow } from './NexTableBodyEmptyRow';
import { Memo_MRT_TableBodyRow, NexTableBodyRow } from './NexTableBodyRow';

import { useNexTableRows } from '../../hooks/useNexTableRows';
import { useNexTableRowVirtualizer } from '../../hooks/useNexTableRowVirtualizer';
import {
  type NexTableColumnVirtualizer,
  type NexTableRow,
  type NexRowData,
  type NexTableTableInstance,
  type NexTableVirtualItem,
} from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';

export interface NexTableBodyProps<TData extends NexRowData>
  extends TableTbodyProps {
  columnVirtualizer?: NexTableColumnVirtualizer;
  table: NexTableTableInstance<TData>;
  tableProps: Partial<TableProps>;
}

export const NexTableBody = <TData extends NexRowData>({
  columnVirtualizer,
  table,
  tableProps,
  ...rest
}: NexTableBodyProps<TData>) => {
  const {
    getBottomRows,
    getIsSomeRowsPinned,
    getRowModel,
    getState,
    getTopRows,
    options: {
      enableStickyFooter,
      enableStickyHeader,
      layoutMode,
      mantineTableBodyProps,
      memoMode,
      renderDetailPanel,
      rowPinningDisplayMode,
    },
    refs: { tableFooterRef, tableHeadRef },
  } = table;
  const { isFullScreen, rowPinning } = getState();

  const tableBodyProps = {
    ...parseFromValuesOrFunc(mantineTableBodyProps, { table }),
    ...rest,
  };

  const tableHeadHeight =
    ((enableStickyHeader || isFullScreen) &&
      tableHeadRef.current?.clientHeight) ||
    0;
  const tableFooterHeight =
    (enableStickyFooter && tableFooterRef.current?.clientHeight) || 0;

  const pinnedRowIds = useMemo(() => {
    if (!rowPinning.bottom?.length && !rowPinning.top?.length) return [];
    return getRowModel()
      .rows.filter((row) => row.getIsPinned())
      .map((r) => r.id);
  }, [rowPinning, getRowModel().rows]);

  const rows = useNexTableRows(table);

  const rowVirtualizer = useNexTableRowVirtualizer(table, rows);

  const { virtualRows } = rowVirtualizer ?? {};

  const commonRowProps = {
    columnVirtualizer,
    numRows: rows.length,
    table,
    tableProps,
  };

  return (
    <>
      {!rowPinningDisplayMode?.includes('sticky') &&
        getIsSomeRowsPinned('top') && (
          <TableTbody
            {...tableBodyProps}
            __vars={{
              '--mrt-table-head-height': `${tableHeadHeight}`,
              ...tableBodyProps?.__vars,
            }}
            className={clsx(
              classes.pinned,
              layoutMode?.startsWith('grid') && classes['root-grid'],
              tableBodyProps?.className,
            )}
          >
            {getTopRows().map((row, renderedRowIndex) => {
              const rowProps = {
                ...commonRowProps,
                renderedRowIndex,
                row,
              };
              return memoMode === 'rows' ? (
                <Memo_MRT_TableBodyRow key={row.id} {...rowProps} />
              ) : (
                <NexTableBodyRow key={row.id} {...rowProps} />
              );
            })}
          </TableTbody>
        )}
      <TableTbody
        {...tableBodyProps}
        __vars={{
          '--mrt-table-body-height': rowVirtualizer
            ? `${rowVirtualizer.getTotalSize()}px`
            : undefined,
          ...tableBodyProps?.__vars,
        }}
        className={clsx(
          classes.root,
          layoutMode?.startsWith('grid') && classes['root-grid'],
          !rows.length && classes['root-no-rows'],
          rowVirtualizer && classes['root-virtualized'],
          tableBodyProps?.className,
        )}
      >
        {tableBodyProps?.children ??
          (!rows.length ? (
            <NexTableBodyEmptyRow {...commonRowProps} />
          ) : (
            <>
              {(virtualRows ?? rows).map(
                (rowOrVirtualRow, renderedRowIndex) => {
                  if (rowVirtualizer) {
                    if (renderDetailPanel) {
                      if (rowOrVirtualRow.index % 2 === 1) {
                        return null;
                      } else {
                        renderedRowIndex = rowOrVirtualRow.index / 2;
                      }
                    } else {
                      renderedRowIndex = rowOrVirtualRow.index;
                    }
                  }
                  const row = rowVirtualizer
                    ? rows[renderedRowIndex]
                    : (rowOrVirtualRow as NexTableRow<TData>);
                  const props = {
                    ...commonRowProps,
                    pinnedRowIds,
                    renderedRowIndex,
                    row,
                    rowVirtualizer,
                    virtualRow: rowVirtualizer
                      ? (rowOrVirtualRow as NexTableVirtualItem)
                      : undefined,
                  };
                  const key = `${row.id}-${row.index}`;
                  return memoMode === 'rows' ? (
                    <Memo_MRT_TableBodyRow key={key} {...props} />
                  ) : (
                    <NexTableBodyRow key={key} {...props} />
                  );
                },
              )}
            </>
          ))}
      </TableTbody>
      {!rowPinningDisplayMode?.includes('sticky') &&
        getIsSomeRowsPinned('bottom') && (
          <TableTbody
            {...tableBodyProps}
            __vars={{
              '--mrt-table-footer-height': `${tableFooterHeight}`,
              ...tableBodyProps?.__vars,
            }}
            className={clsx(
              classes.pinned,
              layoutMode?.startsWith('grid') && classes['root-grid'],
              tableBodyProps?.className,
            )}
          >
            {getBottomRows().map((row, renderedRowIndex) => {
              const props = {
                ...commonRowProps,
                renderedRowIndex,
                row,
              };
              return memoMode === 'rows' ? (
                <Memo_MRT_TableBodyRow key={row.id} {...props} />
              ) : (
                <NexTableBodyRow key={row.id} {...props} />
              );
            })}
          </TableTbody>
        )}
    </>
  );
};

export const Memo_MRT_TableBody = memo(
  NexTableBody,
  (prev, next) => prev.table.options.data === next.table.options.data,
) as typeof NexTableBody;
