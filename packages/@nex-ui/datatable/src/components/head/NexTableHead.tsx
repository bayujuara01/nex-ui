import clsx from 'clsx';

import classes from './NexTableHead.module.css';

import {
  TableTh,
  TableThead,
  type TableTheadProps,
  TableTr,
} from '@nex-ui/core';

import { NexTableHeadRow } from './NexTableHeadRow';

import {
  type NexTableColumnVirtualizer,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';
import { NexTableToolbarAlertBanner } from '../toolbar/NexTableToolbarAlertBanner';

interface Props<TData extends NexRowData> extends TableTheadProps {
  columnVirtualizer?: NexTableColumnVirtualizer;
  table: NexTableTableInstance<TData>;
}

export const NexTableHead = <TData extends NexRowData>({
  columnVirtualizer,
  table,
  ...rest
}: Props<TData>) => {
  const {
    getHeaderGroups,
    getSelectedRowModel,
    getState,
    options: {
      enableStickyHeader,
      layoutMode,
      mantineTableHeadProps,
      positionToolbarAlertBanner,
    },
    refs: { tableHeadRef },
  } = table;
  const { isFullScreen, showAlertBanner } = getState();

  const tableHeadProps = {
    ...parseFromValuesOrFunc(mantineTableHeadProps, {
      table,
    }),
    ...rest,
  };

  const stickyHeader = enableStickyHeader || isFullScreen;

  return (
    <TableThead
      {...tableHeadProps}
      className={clsx(
        classes.root,
        layoutMode?.startsWith('grid')
          ? classes['root-grid']
          : classes['root-table-row-group'],
        stickyHeader && classes['root-sticky'],
        tableHeadProps?.className,
      )}
      pos={
        stickyHeader && layoutMode?.startsWith('grid') ? 'sticky' : 'relative'
      }
      ref={(ref: HTMLTableSectionElement) => {
        tableHeadRef.current = ref;
        if (tableHeadProps?.ref) {
          // @ts-ignore
          tableHeadProps.ref.current = ref;
        }
      }}
    >
      {positionToolbarAlertBanner === 'head-overlay' &&
      (showAlertBanner || getSelectedRowModel().rows.length > 0) ? (
        <TableTr
          className={clsx(
            classes['banner-tr'],
            layoutMode?.startsWith('grid') && classes.grid,
          )}
        >
          <TableTh
            className={clsx(
              classes['banner-th'],
              layoutMode?.startsWith('grid') && classes.grid,
            )}
            colSpan={table.getVisibleLeafColumns().length}
          >
            <NexTableToolbarAlertBanner table={table} />
          </TableTh>
        </TableTr>
      ) : (
        getHeaderGroups().map((headerGroup) => (
          <NexTableHeadRow
            columnVirtualizer={columnVirtualizer}
            headerGroup={headerGroup as any}
            key={headerGroup.id}
            table={table}
          />
        ))
      )}
    </TableThead>
  );
};
