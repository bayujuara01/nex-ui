import clsx from 'clsx';

import classes from './NexTableFooterRow.module.css';

import { Box, TableTr, type TableTrProps } from '@nex-ui/core';

import { NexTableFooterCell } from './NexTableFooterCell';

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
  footerGroup: NexTableHeaderGroup<TData>;
  table: NexTableTableInstance<TData>;
}

export const NexTableFooterRow = <TData extends NexRowData>({
  columnVirtualizer,
  footerGroup,
  table,
  ...rest
}: Props<TData>) => {
  const {
    options: { layoutMode, mantineTableFooterRowProps },
  } = table;

  const { virtualColumns, virtualPaddingLeft, virtualPaddingRight } =
    columnVirtualizer ?? {};

  // if no content in row, skip row
  if (
    !footerGroup.headers?.some(
      (header) =>
        (typeof header.column.columnDef.footer === 'string' &&
          !!header.column.columnDef.footer) ||
        header.column.columnDef.Footer,
    )
  ) {
    return null;
  }

  const tableRowProps = {
    ...parseFromValuesOrFunc(mantineTableFooterRowProps, {
      footerGroup,
      table,
    }),
    ...rest,
  };

  return (
    <TableTr
      className={clsx(
        classes.root,
        layoutMode?.startsWith('grid') && classes['layout-mode-grid'],
      )}
      {...tableRowProps}
    >
      {virtualPaddingLeft ? (
        <Box component="th" display="flex" w={virtualPaddingLeft} />
      ) : null}
      {(virtualColumns ?? footerGroup.headers).map(
        (footerOrVirtualFooter, renderedColumnIndex) => {
          let footer = footerOrVirtualFooter as NexTableHeader<TData>;
          if (columnVirtualizer) {
            renderedColumnIndex = (footerOrVirtualFooter as NexTableVirtualItem)
              .index;
            footer = footerGroup.headers[renderedColumnIndex];
          }

          return (
            <NexTableFooterCell
              footer={footer}
              key={footer.id}
              renderedColumnIndex={renderedColumnIndex}
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
