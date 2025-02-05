import { type DragEvent, type RefObject } from 'react';

import { type ActionIconProps } from '@nex-ui/core';

import {
  type NexTableRow,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';
import { NexTableGrabHandleButton } from '../buttons/NexTableGrabHandleButton';

interface Props<TData extends NexRowData> extends ActionIconProps {
  row: NexTableRow<TData>;
  rowRef: RefObject<HTMLTableRowElement>;
  table: NexTableTableInstance<TData>;
}

export const NexTableBodyRowGrabHandle = <TData extends NexRowData>({
  row,
  rowRef,
  table,
  ...rest
}: Props<TData>) => {
  const {
    options: { mantineRowDragHandleProps },
  } = table;

  const actionIconProps = {
    ...parseFromValuesOrFunc(mantineRowDragHandleProps, {
      row,
      table,
    }),
    ...rest,
  };

  const handleDragStart = (event: DragEvent<HTMLButtonElement>) => {
    actionIconProps?.onDragStart?.(event);
    event.dataTransfer.setDragImage(rowRef.current as HTMLElement, 0, 0);
    table.setDraggingRow(row as any);
  };

  const handleDragEnd = (event: DragEvent<HTMLButtonElement>) => {
    actionIconProps?.onDragEnd?.(event);
    table.setDraggingRow(null);
    table.setHoveredRow(null);
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
