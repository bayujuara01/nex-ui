import clsx from 'clsx';

import classes from './NexTableShowHideColumnsMenu.module.css';

import { useMemo, useState } from 'react';

import { Button, Flex, Menu } from '@nex-ui/core';

import { NexTableShowHideColumnsMenuItems } from './NexTableShowHideColumnsMenuItems';

import {
  type NexTableColumn,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';
import { getDefaultColumnOrderIds } from '../../utils/displayColumn.utils';

interface Props<TData extends NexRowData> {
  table: NexTableTableInstance<TData>;
}

export const NexTableShowHideColumnsMenu = <TData extends NexRowData>({
  table,
}: Props<TData>) => {
  const {
    getAllColumns,
    getAllLeafColumns,
    getCenterLeafColumns,
    getIsAllColumnsVisible,
    getIsSomeColumnsPinned,
    getIsSomeColumnsVisible,
    getLeftLeafColumns,
    getRightLeafColumns,
    getState,
    options: {
      enableColumnOrdering,
      enableColumnPinning,
      enableHiding,
      localization,
    },
  } = table;
  const { columnOrder, columnPinning } = getState();

  const handleToggleAllColumns = (value?: boolean) => {
    getAllLeafColumns()
      .filter((col) => col.columnDef.enableHiding !== false)
      .forEach((col) => col.toggleVisibility(value));
  };

  const allColumns = useMemo(() => {
    const columns = getAllColumns();
    if (
      columnOrder.length > 0 &&
      !columns.some((col) => col.columnDef.columnDefType === 'group')
    ) {
      return [
        ...getLeftLeafColumns(),
        ...Array.from(new Set(columnOrder)).map((colId) =>
          getCenterLeafColumns().find((col) => col?.id === colId),
        ),
        ...getRightLeafColumns(),
      ].filter(Boolean);
    }
    return columns;
  }, [
    columnOrder,
    columnPinning,
    getAllColumns(),
    getCenterLeafColumns(),
    getLeftLeafColumns(),
    getRightLeafColumns(),
  ]) as NexTableColumn<TData>[];

  const [hoveredColumn, setHoveredColumn] = useState<NexTableColumn<TData> | null>(
    null,
  );

  return (
    <Menu.Dropdown className={clsx('mrt-show-hide-columns-menu', classes.root)}>
      <Flex className={classes.content}>
        {enableHiding && (
          <Button
            disabled={!getIsSomeColumnsVisible()}
            onClick={() => handleToggleAllColumns(false)}
            variant="subtle"
          >
            {localization.hideAll}
          </Button>
        )}
        {enableColumnOrdering && (
          <Button
            onClick={() =>
              table.setColumnOrder(
                getDefaultColumnOrderIds(table.options as any, true),
              )
            }
            variant="subtle"
          >
            {localization.resetOrder}
          </Button>
        )}
        {enableColumnPinning && (
          <Button
            disabled={!getIsSomeColumnsPinned()}
            onClick={() => table.resetColumnPinning(true)}
            variant="subtle"
          >
            {localization.unpinAll}
          </Button>
        )}
        {enableHiding && (
          <Button
            disabled={getIsAllColumnsVisible()}
            onClick={() => handleToggleAllColumns(true)}
            variant="subtle"
          >
            {localization.showAll}
          </Button>
        )}
      </Flex>
      <Menu.Divider />
      {allColumns.map((column, index) => (
        <NexTableShowHideColumnsMenuItems
          allColumns={allColumns}
          column={column}
          hoveredColumn={hoveredColumn}
          key={`${index}-${column.id}`}
          setHoveredColumn={setHoveredColumn}
          table={table}
        />
      ))}
    </Menu.Dropdown>
  );
};
