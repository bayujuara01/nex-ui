import { type DragEvent, type RefObject } from 'react';

import { type ActionIconProps } from '@nex-ui/core';

import {
  type NexTableCellValue,
  type NexTableColumn,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';
import { reorderColumn } from '../../utils/column.utils';
import { parseFromValuesOrFunc } from '../../utils/utils';
import { NexTableGrabHandleButton } from '../buttons/NexTableGrabHandleButton';

interface Props<TData extends NexRowData, TValue = NexTableCellValue>
  extends ActionIconProps {
  column: NexTableColumn<TData, TValue>;
  table: NexTableTableInstance<TData>;
  tableHeadCellRef: RefObject<HTMLTableCellElement>;
}

export const NexTableHeadCellGrabHandle = <TData extends NexRowData>({
  column,
  table,
  tableHeadCellRef,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: { enableColumnOrdering, mantineColumnDragHandleProps },
    setColumnOrder,
    setDraggingColumn,
    setHoveredColumn,
  } = table;
  const { columnDef } = column;
  const { columnOrder, draggingColumn, hoveredColumn } = getState();

  const arg = { column, table };
  const actionIconProps = {
    ...parseFromValuesOrFunc(mantineColumnDragHandleProps, arg),
    ...parseFromValuesOrFunc(columnDef.mantineColumnDragHandleProps, arg),
    ...rest,
  };

  const handleDragStart = (event: DragEvent<HTMLButtonElement>) => {
    actionIconProps?.onDragStart?.(event);
    setDraggingColumn(column);
    event.dataTransfer.setDragImage(
      tableHeadCellRef.current as HTMLElement,
      0,
      0,
    );
  };

  const handleDragEnd = (event: DragEvent<HTMLButtonElement>) => {
    actionIconProps?.onDragEnd?.(event);
    if (hoveredColumn?.id === 'drop-zone') {
      column.toggleGrouping();
    } else if (
      enableColumnOrdering &&
      hoveredColumn &&
      hoveredColumn?.id !== draggingColumn?.id
    ) {
      setColumnOrder(
        reorderColumn(column, hoveredColumn as NexTableColumn<TData>, columnOrder),
      );
    }
    setDraggingColumn(null);
    setHoveredColumn(null);
  };

  return (
    <NexTableGrabHandleButton
      actionIconProps={actionIconProps}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      table={table}
    />
  );
};
