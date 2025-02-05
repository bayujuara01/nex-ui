import clsx from 'clsx';

import classes from './NexTable.module.css';

import { useMemo } from 'react';

import {
  darken,
  lighten,
  Table,
  type TableProps,
  useMantineColorScheme,
} from '@nex-ui/core';

import { useNexTableColumnVirtualizer } from '../../hooks/useNexTableColumnVirtualizer';
import { type NexRowData, type NexTableTableInstance } from '../../types';
import { parseCSSVarId } from '../../utils/style.utils';
import { parseFromValuesOrFunc } from '../../utils/utils';
import { Memo_MRT_TableBody, NexTableBody } from '../body/NexTableBody';
import { NexTableFooter } from '../footer/NexTableFooter';
import { NexTableHead } from '../head/NexTableHead';

interface Props<TData extends NexRowData> extends TableProps {
  table: NexTableTableInstance<TData>;
}

export const NexTable = <TData extends NexRowData>({
  table,
  ...rest
}: Props<TData>) => {
  const {
    getFlatHeaders,
    getState,
    options: {
      columns,
      enableTableFooter,
      enableTableHead,
      layoutMode,
      mantineTableProps,
      memoMode,
    },
  } = table;
  const { columnSizing, columnSizingInfo, columnVisibility, density } =
    getState();

  const tableProps = {
    highlightOnHover: true,
    horizontalSpacing: density,
    verticalSpacing: density,
    ...parseFromValuesOrFunc(mantineTableProps, { table }),
    ...rest,
  };

  const columnSizeVars = useMemo(() => {
    const headers = getFlatHeaders();
    const colSizes: { [key: string]: number } = {};
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      const colSize = header.getSize();
      colSizes[`--header-${parseCSSVarId(header.id)}-size`] = colSize;
      colSizes[`--col-${parseCSSVarId(header.column.id)}-size`] = colSize;
    }
    return colSizes;
  }, [columns, columnSizing, columnSizingInfo, columnVisibility]);

  const columnVirtualizer = useNexTableColumnVirtualizer(table);

  const commonTableGroupProps = {
    columnVirtualizer,
    table,
  };

  const { colorScheme } = useMantineColorScheme();

  const { stripedColor } = tableProps;

  return (
    <Table
      className={clsx(
        'mrt-table',
        classes.root,
        layoutMode?.startsWith('grid') && classes['root-grid'],
        tableProps.className,
      )}
      {...tableProps}
      __vars={{
        ...columnSizeVars,
        '--mrt-striped-row-background-color': stripedColor,
        '--mrt-striped-row-hover-background-color': stripedColor
          ? colorScheme === 'dark'
            ? lighten(stripedColor, 0.08)
            : darken(stripedColor, 0.12)
          : undefined,
        ...tableProps.__vars,
      }}
    >
      {enableTableHead && <NexTableHead {...commonTableGroupProps} />}
      {memoMode === 'table-body' || columnSizingInfo.isResizingColumn ? (
        <Memo_MRT_TableBody
          {...commonTableGroupProps}
          tableProps={tableProps}
        />
      ) : (
        <NexTableBody {...commonTableGroupProps} tableProps={tableProps} />
      )}
      {enableTableFooter && <NexTableFooter {...commonTableGroupProps} />}
    </Table>
  );
};
