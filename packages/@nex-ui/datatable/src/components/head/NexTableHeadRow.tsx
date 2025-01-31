import clsx from 'clsx';

import classes from './NexTableHeadRow.module.css';

import { Box, TableTr, type TableTrProps } from '@nex-ui/core';

import { NexTableHeadCell } from './NexTableHeadCell';

import {
  type NexTableColumnVirtualizer,
  type NexTableHeader,
  type NexTableHeaderGroup,
  type NexRowData,
  type NexTableTableInstance,
  type NexTableVirtualItem,
} from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';

interface Props<TData extends NexRowData> extends TableTrProps {
  columnVirtualizer?: NexTableColumnVirtualizer;
  headerGroup: NexTableHeaderGroup<TData>;
  table: NexTableTableInstance<TData>;
}

export const NexTableHeadRow = <TData extends NexRowData>({
  columnVirtualizer,
  headerGroup,
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: { enableStickyHeader, layoutMode, mantineTableHeadRowProps },
  } = table;
  const { isFullScreen } = getState();

  const { virtualColumns, virtualPaddingLeft, virtualPaddingRight } =
    columnVirtualizer ?? {};

  const tableRowProps = {
    ...parseFromValuesOrFunc(mantineTableHeadRowProps, {
      headerGroup,
      table,
    }),
    ...rest,
  };

  return (
    <TableTr
      {...tableRowProps}
      className={clsx(
        classes.root,
        (enableStickyHeader || isFullScreen) && classes.sticky,
        layoutMode?.startsWith('grid') && classes['layout-mode-grid'],
        tableRowProps?.className,
      )}
    >
      {virtualPaddingLeft ? (
        <Box component="th" display="flex" w={virtualPaddingLeft} />
      ) : null}
      {(virtualColumns ?? headerGroup.headers).map(
        (headerOrVirtualHeader, renderedHeaderIndex) => {
          let header = headerOrVirtualHeader as NexTableHeader<TData>;
          if (columnVirtualizer) {
            renderedHeaderIndex = (headerOrVirtualHeader as NexTableVirtualItem)
              .index;
            header = headerGroup.headers[renderedHeaderIndex];
          }

          return (
            <NexTableHeadCell
              columnVirtualizer={columnVirtualizer}
              header={header}
              key={header.id}
              renderedHeaderIndex={renderedHeaderIndex}
              table={table}
            />
          );
        },
      )}
      {virtualPaddingRight ? (
        <Box component="th" display="flex" w={virtualPaddingRight} />
      ) : null}
    </TableTr>
  );
};
