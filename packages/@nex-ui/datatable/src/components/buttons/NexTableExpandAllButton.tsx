import clsx from 'clsx';

import classes from './NexTableExpandAllButton.module.css';

import { ActionIcon, type ActionIconProps, Tooltip } from '@nex-ui/core';

import { type NexRowData, type NexTableTableInstance } from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';

interface Props<TData extends NexRowData> extends ActionIconProps {
  table: NexTableTableInstance<TData>;
}

export const NexTableExpandAllButton = <TData extends NexRowData>({
  table,
  ...rest
}: Props<TData>) => {
  const {
    getCanSomeRowsExpand,
    getIsAllRowsExpanded,
    getIsSomeRowsExpanded,
    getState,
    options: {
      icons: { IconChevronsDown },
      localization,
      mantineExpandAllButtonProps,
      renderDetailPanel,
    },
    toggleAllRowsExpanded,
  } = table;
  const { density, isLoading } = getState();

  const actionIconProps = {
    ...parseFromValuesOrFunc(mantineExpandAllButtonProps, {
      table,
    }),
    ...rest,
  };

  const isAllRowsExpanded = getIsAllRowsExpanded();

  return (
    <Tooltip
      label={
        (actionIconProps?.title ?? isAllRowsExpanded)
          ? localization.collapseAll
          : localization.expandAll
      }
      openDelay={1000}
      withinPortal
    >
      <ActionIcon
        aria-label={localization.expandAll}
        color="gray"
        variant="subtle"
        {...actionIconProps}
        className={clsx(
          'mrt-expand-all-button',
          classes.root,
          actionIconProps?.className,
          density,
        )}
        disabled={isLoading || (!renderDetailPanel && !getCanSomeRowsExpand())}
        onClick={() => toggleAllRowsExpanded(!isAllRowsExpanded)}
        title={undefined}
      >
        {actionIconProps?.children ?? (
          <IconChevronsDown
            className={clsx(
              classes.chevron,
              isAllRowsExpanded
                ? classes.up
                : getIsSomeRowsExpanded()
                  ? classes.right
                  : undefined,
            )}
          />
        )}
      </ActionIcon>
    </Tooltip>
  );
};
