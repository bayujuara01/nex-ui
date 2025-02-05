import clsx from 'clsx';

import classes from './NexTableFooter.module.css';

import { TableTfoot, type TableTfootProps } from '@nex-ui/core';

import { NexTableFooterRow } from './NexTableFooterRow';

import {
  type NexTableColumnVirtualizer,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';

interface Props<TData extends NexRowData> extends TableTfootProps {
  columnVirtualizer?: NexTableColumnVirtualizer;
  table: NexTableTableInstance<TData>;
}

export const NexTableFooter = <TData extends NexRowData>({
  columnVirtualizer,
  table,
  ...rest
}: Props<TData>) => {
  const {
    getFooterGroups,
    getState,
    options: { enableStickyFooter, layoutMode, mantineTableFooterProps },
    refs: { tableFooterRef },
  } = table;
  const { isFullScreen } = getState();

  const tableFooterProps = {
    ...parseFromValuesOrFunc(mantineTableFooterProps, {
      table,
    }),
    ...rest,
  };

  const stickFooter =
    (isFullScreen || enableStickyFooter) && enableStickyFooter !== false;

  return (
    <TableTfoot
      {...tableFooterProps}
      className={clsx(
        classes.root,
        tableFooterProps?.className,
        stickFooter && classes.sticky,
        layoutMode?.startsWith('grid') && classes.grid,
      )}
      ref={(ref: HTMLTableSectionElement) => {
        tableFooterRef.current = ref;
        if (tableFooterProps?.ref) {
          // @ts-ignore
          tableFooterProps.ref.current = ref;
        }
      }}
    >
      {getFooterGroups().map((footerGroup) => (
        <NexTableFooterRow
          columnVirtualizer={columnVirtualizer}
          footerGroup={footerGroup as any}
          key={footerGroup.id}
          table={table}
        />
      ))}
    </TableTfoot>
  );
};
