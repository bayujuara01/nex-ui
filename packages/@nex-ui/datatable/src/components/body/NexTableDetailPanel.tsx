import clsx from 'clsx';

import classes from './NexTableDetailPanel.module.css';

import { type RefObject } from 'react';

import { Collapse, TableTd, type TableTdProps, TableTr } from '@nex-ui/core';

import {
  type NexTableRow,
  type NexRowData,
  type NexTableRowVirtualizer,
  type NexTableTableInstance,
  type NexTableVirtualItem,
} from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';
import { NexTableEditCellTextInput } from '../inputs/NexTableEditCellTextInput';

interface Props<TData extends NexRowData> extends TableTdProps {
  parentRowRef: RefObject<HTMLTableRowElement | null>;
  renderedRowIndex?: number;
  row: NexTableRow<TData>;
  rowVirtualizer?: NexTableRowVirtualizer;
  striped?: false | string;
  table: NexTableTableInstance<TData>;
  virtualRow?: NexTableVirtualItem;
}

export const NexTableDetailPanel = <TData extends NexRowData>({
  parentRowRef,
  renderedRowIndex = 0,
  row,
  rowVirtualizer,
  striped,
  table,
  virtualRow,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    getVisibleLeafColumns,
    options: {
      layoutMode,
      mantineDetailPanelProps,
      mantineTableBodyRowProps,
      renderDetailPanel,
    },
  } = table;
  const { isLoading } = getState();

  const tableRowProps = parseFromValuesOrFunc(mantineTableBodyRowProps, {
    isDetailPanel: true,
    row,
    table,
  });

  const tableCellProps = {
    ...parseFromValuesOrFunc(mantineDetailPanelProps, {
      row,
      table,
    }),
    ...rest,
  };

  const internalEditComponents = row
    .getAllCells()
    .filter((cell) => cell.column.columnDef.columnDefType === 'data')
    .map((cell) => (
      <NexTableEditCellTextInput cell={cell} key={cell.id} table={table} />
    ));

  const DetailPanel =
    !isLoading &&
    row.getIsExpanded() &&
    renderDetailPanel?.({ internalEditComponents, row, table });

  return (
    <TableTr
      data-index={
        renderDetailPanel ? renderedRowIndex * 2 + 1 : renderedRowIndex
      }
      data-striped={striped}
      ref={(node: HTMLTableRowElement) => {
        if (node) {
          rowVirtualizer?.measureElement?.(node);
        }
      }}
      {...tableRowProps}
      __vars={{
        '--mrt-parent-row-height': virtualRow
          ? `${parentRowRef.current?.getBoundingClientRect()?.height}px`
          : undefined,
        '--mrt-virtual-row-start': virtualRow
          ? `${virtualRow.start}px`
          : undefined,
        ...tableRowProps?.__vars,
      }}
      className={clsx(
        'mantine-Table-tr-detail-panel',
        classes.root,
        layoutMode?.startsWith('grid') && classes['root-grid'],
        virtualRow && classes['root-virtual-row'],
        tableRowProps?.className,
      )}
    >
      <TableTd
        colSpan={getVisibleLeafColumns().length}
        component="td"
        {...tableCellProps}
        __vars={{
          '--mrt-inner-width': `${table.getTotalSize()}px`,
        }}
        className={clsx(
          'mantine-Table-td-detail-panel',
          classes.inner,
          layoutMode?.startsWith('grid') && classes['inner-grid'],
          row.getIsExpanded() && classes['inner-expanded'],
          virtualRow && classes['inner-virtual'],
        )}
        p={row.getIsExpanded() && DetailPanel ? 'md' : 0}
      >
        {rowVirtualizer ? (
          row.getIsExpanded() && DetailPanel
        ) : (
          <Collapse in={row.getIsExpanded()}>{DetailPanel}</Collapse>
        )}
      </TableTd>
    </TableTr>
  );
};
