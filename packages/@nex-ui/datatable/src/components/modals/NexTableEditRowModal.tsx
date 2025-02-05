import { Flex, Modal, type ModalProps, Stack } from '@nex-ui/core';

import {
  type NexTableRow,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';
import { NexTableEditActionButtons } from '../buttons/NexTableEditActionButtons';
import { NexTableEditCellTextInput } from '../inputs/NexTableEditCellTextInput';

interface Props<TData extends NexRowData> extends Partial<ModalProps> {
  open: boolean;
  table: NexTableTableInstance<TData>;
}

export const NexTableEditRowModal = <TData extends NexRowData>({
  open,
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: {
      mantineCreateRowModalProps,
      mantineEditRowModalProps,
      onCreatingRowCancel,
      onEditingRowCancel,
      renderCreateRowModalContent,
      renderEditRowModalContent,
    },
    setCreatingRow,
    setEditingRow,
  } = table;
  const { creatingRow, editingRow } = getState();
  const row = (creatingRow ?? editingRow) as NexTableRow<TData>;

  const arg = { row, table };
  const modalProps = {
    ...parseFromValuesOrFunc(mantineEditRowModalProps, arg),
    ...(creatingRow && parseFromValuesOrFunc(mantineCreateRowModalProps, arg)),
    ...rest,
  };

  const internalEditComponents = row
    .getAllCells()
    .filter((cell) => cell.column.columnDef.columnDefType === 'data')
    .map((cell) => (
      <NexTableEditCellTextInput cell={cell} key={cell.id} table={table} />
    ));

  const handleCancel = () => {
    if (creatingRow) {
      onCreatingRowCancel?.({ row, table });
      setCreatingRow(null);
    } else {
      onEditingRowCancel?.({ row, table });
      setEditingRow(null);
    }
    row._valuesCache = {} as any; //reset values cache
    modalProps.onClose?.();
  };

  return (
    <Modal
      opened={open}
      withCloseButton={false}
      {...modalProps}
      key={row.id}
      onClose={handleCancel}
    >
      {((creatingRow &&
        renderCreateRowModalContent?.({
          internalEditComponents,
          row,
          table,
        })) ||
        renderEditRowModalContent?.({
          internalEditComponents,
          row,
          table,
        })) ?? (
        <>
          <form onSubmit={(e) => e.preventDefault()}>
            <Stack gap="lg" pb={24} pt={16}>
              {internalEditComponents}
            </Stack>
          </form>
          <Flex justify="flex-end">
            <NexTableEditActionButtons row={row} table={table} variant="text" />
          </Flex>
        </>
      )}
    </Modal>
  );
};
