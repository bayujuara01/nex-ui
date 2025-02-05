import { type ActionIconProps, Box } from '@nex-ui/core';

import {
  type NexTableRow,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';
import { NexTableRowPinButton } from '../buttons/NexTableRowPinButton';

interface Props<TData extends NexRowData> extends ActionIconProps {
  row: NexTableRow<TData>;
  table: NexTableTableInstance<TData>;
}

export const NexTableBodyRowPinButton = <TData extends NexRowData>({
  row,
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: { enableRowPinning, rowPinningDisplayMode },
  } = table;
  const { density } = getState();

  const canPin = parseFromValuesOrFunc(enableRowPinning, row as any);

  if (!canPin) return null;

  const rowPinButtonProps = {
    row,
    table,
    ...rest,
  };

  if (rowPinningDisplayMode === 'top-and-bottom' && !row.getIsPinned()) {
    return (
      <Box
        style={{
          display: 'flex',
          flexDirection: density === 'xs' ? 'row' : 'column',
        }}
      >
        <NexTableRowPinButton pinningPosition="top" {...rowPinButtonProps} />
        <NexTableRowPinButton pinningPosition="bottom" {...rowPinButtonProps} />
      </Box>
    );
  }

  return (
    <NexTableRowPinButton
      pinningPosition={rowPinningDisplayMode === 'bottom' ? 'bottom' : 'top'}
      {...rowPinButtonProps}
    />
  );
};
