import clsx from 'clsx';

import classes from './NexTableExpandButton.module.css';

import { type MouseEvent } from 'react';

import {
  ActionIcon,
  type ActionIconProps,
  Tooltip,
  useDirection,
} from '@nex-ui/core';

import {
  type NexTableRow,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';
import { NexTableEditCellTextInput } from '../inputs/NexTableEditCellTextInput';

interface Props<TData extends NexRowData> extends ActionIconProps {
  row: NexTableRow<TData>;
  table: NexTableTableInstance<TData>;
}

export const NexTableExpandButton = <TData extends NexRowData>({
  row,
  table,
  ...rest
}: Props<TData>) => {
  const direction = useDirection();
  const {
    options: {
      icons: { IconChevronDown },
      localization,
      mantineExpandButtonProps,
      positionExpandColumn,
      renderDetailPanel,
    },
  } = table;

  const actionIconProps = {
    ...parseFromValuesOrFunc(mantineExpandButtonProps, {
      row,
      table,
    }),
    ...rest,
  };

  const internalEditComponents = row
    .getAllCells()
    .filter((cell) => cell.column.columnDef.columnDefType === 'data')
    .map((cell) => (
      <NexTableEditCellTextInput cell={cell} key={cell.id} table={table} />
    ));

  const canExpand = row.getCanExpand();
  const isExpanded = row.getIsExpanded();

  const DetailPanel = !!renderDetailPanel?.({
    internalEditComponents,
    row,
    table,
  });

  const handleToggleExpand = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    row.toggleExpanded();
    actionIconProps?.onClick?.(event);
  };

  const rtl = direction.dir === 'rtl' || positionExpandColumn === 'last';

  return (
    <Tooltip
      disabled={!canExpand && !DetailPanel}
      label={
        actionIconProps?.title ??
        (isExpanded ? localization.collapse : localization.expand)
      }
      openDelay={1000}
      withinPortal
    >
      <ActionIcon
        aria-label={localization.expand}
        color="gray"
        disabled={!canExpand && !DetailPanel}
        variant="subtle"
        {...actionIconProps}
        __vars={{
          '--mrt-row-depth': `${row.depth}`,
        }}
        className={clsx(
          'mrt-expand-button',
          classes.root,
          classes[`root-${rtl ? 'rtl' : 'ltr'}`],
          actionIconProps?.className,
        )}
        onClick={handleToggleExpand}
        title={undefined}
      >
        {actionIconProps?.children ?? (
          <IconChevronDown
            className={clsx(
              'mrt-expand-button-chevron',
              classes.chevron,
              !canExpand && !renderDetailPanel
                ? classes.right
                : isExpanded
                  ? classes.up
                  : undefined,
            )}
          />
        )}
      </ActionIcon>
    </Tooltip>
  );
};
