import clsx from 'clsx';

import classes from './NexTableEditActionButtons.module.css';

import { ActionIcon, Box, type BoxProps, Button, Tooltip } from '@nex-ui/core';

import {
  type NexTableRow,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';

interface Props<TData extends NexRowData> extends BoxProps {
  row: NexTableRow<TData>;
  table: NexTableTableInstance<TData>;
  variant?: 'icon' | 'text';
}

export const NexTableEditActionButtons = <TData extends NexRowData>({
  row,
  table,
  variant = 'icon',
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: {
      icons: { IconCircleX, IconDeviceFloppy },
      localization,
      onCreatingRowCancel,
      onCreatingRowSave,
      onEditingRowCancel,
      onEditingRowSave,
    },
    refs: { editInputRefs },
    setCreatingRow,
    setEditingRow,
  } = table;
  const { creatingRow, editingRow, isSaving } = getState();

  const isCreating = creatingRow?.id === row.id;
  const isEditing = editingRow?.id === row.id;

  const handleCancel = () => {
    if (isCreating) {
      onCreatingRowCancel?.({ row, table });
      setCreatingRow(null);
    } else if (isEditing) {
      onEditingRowCancel?.({ row, table });
      setEditingRow(null);
    }
    row._valuesCache = {} as any; //reset values cache
  };

  const handleSubmitRow = () => {
    //look for auto-filled input values
    Object.values(editInputRefs?.current)
      .filter((inputRef) => row.id === inputRef?.name?.split('_')?.[0])
      ?.forEach((input) => {
        if (
          input.value !== undefined &&
          Object.hasOwn(row?._valuesCache as object, input.name)
        ) {
          // @ts-ignore
          row._valuesCache[input.name] = input.value;
        }
      });
    if (isCreating)
      onCreatingRowSave?.({
        exitCreatingMode: () => setCreatingRow(null),
        row,
        table,
        values: row._valuesCache,
      });
    else if (isEditing) {
      onEditingRowSave?.({
        exitEditingMode: () => setEditingRow(null),
        row,
        table,
        values: row?._valuesCache,
      });
    }
  };

  return (
    <Box
      className={clsx('mrt-edit-action-buttons', classes.root)}
      onClick={(e) => e.stopPropagation()}
      {...rest}
    >
      {variant === 'icon' ? (
        <>
          <Tooltip label={localization.cancel} withinPortal>
            <ActionIcon
              aria-label={localization.cancel}
              color="red"
              onClick={handleCancel}
              variant="subtle"
            >
              <IconCircleX />
            </ActionIcon>
          </Tooltip>
          <Tooltip label={localization.save} withinPortal>
            <ActionIcon
              aria-label={localization.save}
              color="blue"
              loading={isSaving}
              onClick={handleSubmitRow}
              variant="subtle"
            >
              <IconDeviceFloppy />
            </ActionIcon>
          </Tooltip>
        </>
      ) : (
        <>
          <Button onClick={handleCancel} variant="subtle">
            {localization.cancel}
          </Button>
          <Button loading={isSaving} onClick={handleSubmitRow} variant="filled">
            {localization.save}
          </Button>
        </>
      )}
    </Box>
  );
};
