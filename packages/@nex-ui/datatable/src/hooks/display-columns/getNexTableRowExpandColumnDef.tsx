import { type ReactNode } from 'react';

import { Flex, Tooltip } from '@nex-ui/core';

import { NexTableExpandAllButton } from '../../components/buttons/NexTableExpandAllButton';
import { NexTableExpandButton } from '../../components/buttons/NexTableExpandButton';
import {
  type NexTableColumnDef,
  type NexRowData,
  type NexTableStatefulTableOptions,
} from '../../types';
import { defaultDisplayColumnProps } from '../../utils/displayColumn.utils';

export const getNexTableRowExpandColumnDef = <TData extends NexRowData>(
  tableOptions: NexTableStatefulTableOptions<TData>,
): NexTableColumnDef<TData> | null => {
  const {
    defaultColumn,
    enableExpandAll,
    groupedColumnMode,
    positionExpandColumn,
    renderDetailPanel,
    state: { grouping },
  } = tableOptions;

  const alignProps =
    positionExpandColumn === 'last'
      ? ({
          align: 'right',
        } as const)
      : undefined;

  return {
    Cell: ({ cell, column, row, table }) => {
      const expandButtonProps = { row, table };
      const subRowsLength = row.subRows?.length;
      if (tableOptions.groupedColumnMode === 'remove' && row.groupingColumnId) {
        return (
          <Flex align="center" gap="0.25rem">
            <NexTableExpandButton {...expandButtonProps} />
            <Tooltip
              label={table.getColumn(row.groupingColumnId).columnDef.header}
              openDelay={1000}
              position="right"
            >
              <span>{row.groupingValue as ReactNode}</span>
            </Tooltip>
            {!!subRowsLength && <span>({subRowsLength})</span>}
          </Flex>
        );
      } else {
        return (
          <>
            <NexTableExpandButton {...expandButtonProps} />
            {column.columnDef.GroupedCell?.({ cell, column, row, table })}
          </>
        );
      }
    },
    Header: enableExpandAll
      ? ({ table }) => {
          return (
            <Flex align="center">
              <NexTableExpandAllButton table={table} />
              {groupedColumnMode === 'remove' &&
                grouping
                  ?.map(
                    (groupedColumnId) =>
                      table.getColumn(groupedColumnId).columnDef.header,
                  )
                  ?.join(', ')}
            </Flex>
          );
        }
      : undefined,
    mantineTableBodyCellProps: alignProps,
    mantineTableHeadCellProps: alignProps,
    ...defaultDisplayColumnProps({
      header: 'expand',
      id: 'mrt-row-expand',
      size:
        groupedColumnMode === 'remove'
          ? (defaultColumn?.size ?? 180)
          : renderDetailPanel
            ? enableExpandAll
              ? 60
              : 70
            : 100,
      tableOptions,
    }),
  };
};
