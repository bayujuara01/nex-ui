import { type MouseEvent } from 'react';

import { ActionIcon, Tooltip } from '@nex-ui/core';

import { NexTableEditActionButtons } from './NexTableEditActionButtons';

import {
  type NexTableCell,
  type NexTableCellValue,
  type NexTableRow,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';
import { NexTableRowActionMenu } from '../menus/NexTableRowActionMenu';

interface Props<TData extends NexRowData, TValue = NexTableCellValue> {
  cell: NexTableCell<TData, TValue>;
  row: NexTableRow<TData>;
  table: NexTableTableInstance<TData>;
}

export const NexTableToggleRowActionMenuButton = <TData extends NexRowData>({
  cell,
  row,
  table,
}: Props<TData>) => {
  const {
    getState,
    options: {
      createDisplayMode,
      editDisplayMode,
      enableEditing,
      icons: { IconEdit },
      localization: { edit },
      renderRowActionMenuItems,
      renderRowActions,
    },
    setEditingRow,
  } = table;

  const { creatingRow, editingRow } = getState();

  const isCreating = creatingRow?.id === row.id;
  const isEditing = editingRow?.id === row.id;

  const handleStartEditMode = (event: MouseEvent) => {
    event.stopPropagation();
    setEditingRow({ ...row });
  };

  const showEditActionButtons =
    (isCreating && createDisplayMode === 'row') ||
    (isEditing && editDisplayMode === 'row');

  return (
    <>
      {renderRowActions && !showEditActionButtons ? (
        renderRowActions({ cell, row, table })
      ) : showEditActionButtons ? (
        <NexTableEditActionButtons row={row} table={table} />
      ) : !renderRowActionMenuItems &&
        parseFromValuesOrFunc(enableEditing, row) ? (
        <Tooltip label={edit} openDelay={1000} position="right" withinPortal>
          <ActionIcon
            aria-label={edit}
            color="gray"
            disabled={!!editingRow && editingRow.id !== row.id}
            onClick={handleStartEditMode}
            size="md"
            variant="subtle"
          >
            <IconEdit />
          </ActionIcon>
        </Tooltip>
      ) : renderRowActionMenuItems ? (
        <NexTableRowActionMenu
          handleEdit={handleStartEditMode}
          row={row}
          table={table}
        />
      ) : null}
    </>
  );
};
