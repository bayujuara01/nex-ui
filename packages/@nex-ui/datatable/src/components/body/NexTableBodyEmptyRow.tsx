import clsx from 'clsx';

import classes from './NexTableBody.module.css';

import { useMemo } from 'react';

import { createRow } from '@tanstack/react-table';

import {
  type TableProps,
  TableTd,
  type TableTrProps,
  Text,
} from '@nex-ui/core';

import { NexTableBodyRow } from './NexTableBodyRow';

import {
  type NexTableRow,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';
import { NexTableExpandButton } from '../buttons/NexTableExpandButton';

interface Props<TData extends NexRowData> extends TableTrProps {
  table: NexTableTableInstance<TData>;
  tableProps: Partial<TableProps>;
}

export const NexTableBodyEmptyRow = <TData extends NexRowData>({
  table,
  tableProps,
  ...commonRowProps
}: Props<TData>) => {
  const {
    getState,
    options: {
      layoutMode,
      localization,
      renderDetailPanel,
      renderEmptyRowsFallback,
    },
    refs: { tablePaperRef },
  } = table;
  const { columnFilters, globalFilter } = getState();

  const emptyRow = useMemo(
    () =>
      createRow(
        table as any,
        'mrt-row-empty',
        {} as TData,
        0,
        0,
      ) as NexTableRow<TData>,
    [],
  );

  const emptyRowProps = {
    ...commonRowProps,
    renderedRowIndex: 0,
    row: emptyRow,
    virtualRow: undefined,
  };

  return (
    <NexTableBodyRow
      className={clsx(
        'mrt-table-body-row',
        layoutMode?.startsWith('grid') && classes['empty-row-tr-grid'],
      )}
      table={table}
      tableProps={tableProps}
      {...emptyRowProps}
    >
      {renderDetailPanel && (
        <TableTd
          className={clsx(
            'mrt-table-body-cell',
            layoutMode?.startsWith('grid') && classes['empty-row-td-grid'],
          )}
          colSpan={1}
        >
          <NexTableExpandButton row={emptyRow} table={table} />
        </TableTd>
      )}
      <td
        className={clsx(
          'mrt-table-body-cell',
          layoutMode?.startsWith('grid') && classes['empty-row-td-grid'],
        )}
        colSpan={table.getVisibleLeafColumns().length}
      >
        {renderEmptyRowsFallback?.({ table }) ?? (
          <Text
            __vars={{
              '--mrt-paper-width': `${tablePaperRef.current?.clientWidth}`,
            }}
            className={clsx(classes['empty-row-td-content'])}
          >
            {globalFilter || columnFilters.length
              ? localization.noResultsFound
              : localization.noRecordsToDisplay}
          </Text>
        )}
      </td>
    </NexTableBodyRow>
  );
};
