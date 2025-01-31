import clsx from 'clsx';

import classes from './NexTableColumnPinningButtons.module.css';

import { ActionIcon, Flex, Tooltip } from '@nex-ui/core';

import {
  type NexTableColumn,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';

interface Props<TData extends NexRowData> {
  column: NexTableColumn<TData>;
  table: NexTableTableInstance<TData>;
}

export const NexTableColumnPinningButtons = <TData extends NexRowData>({
  column,
  table,
}: Props<TData>) => {
  const {
    options: {
      icons: { IconPinned, IconPinnedOff },
      localization,
    },
  } = table;
  return (
    <Flex className={clsx('mrt-column-pinning-buttons', classes.root)}>
      {column.getIsPinned() ? (
        <Tooltip label={localization.unpin} withinPortal>
          <ActionIcon
            color="gray"
            onClick={() => column.pin(false)}
            size="md"
            variant="subtle"
          >
            <IconPinnedOff />
          </ActionIcon>
        </Tooltip>
      ) : (
        <>
          <Tooltip label={localization.pinToLeft} withinPortal>
            <ActionIcon
              color="gray"
              onClick={() => column.pin('left')}
              size="md"
              variant="subtle"
            >
              <IconPinned className={classes.left} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label={localization.pinToRight} withinPortal>
            <ActionIcon
              color="gray"
              onClick={() => column.pin('right')}
              size="md"
              variant="subtle"
            >
              <IconPinned className={classes.right} />
            </ActionIcon>
          </Tooltip>
        </>
      )}
    </Flex>
  );
};
