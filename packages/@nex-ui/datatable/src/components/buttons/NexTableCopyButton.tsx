import clsx from 'clsx';

import classes from './NexTableCopyButton.module.css';

import { type ReactNode } from 'react';

import {
  CopyButton,
  Tooltip,
  UnstyledButton,
  type UnstyledButtonProps,
} from '@nex-ui/core';

import {
  type NexTableCell,
  type NexTableCellValue,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';

interface Props<TData extends NexRowData, TValue = NexTableCellValue>
  extends UnstyledButtonProps {
  cell: NexTableCell<TData, TValue>;
  children: ReactNode;
  table: NexTableTableInstance<TData>;
}

export const NexTableCopyButton = <TData extends NexRowData>({
  cell,
  children,
  table,
  ...rest
}: Props<TData>) => {
  const {
    options: {
      localization: { clickToCopy, copiedToClipboard },
      mantineCopyButtonProps,
    },
  } = table;
  const { column, row } = cell;
  const { columnDef } = column;

  const arg = { cell, column, row, table };
  const buttonProps = {
    ...parseFromValuesOrFunc(mantineCopyButtonProps, arg),
    ...parseFromValuesOrFunc(columnDef.mantineCopyButtonProps, arg),
    ...rest,
  };

  return (
    <CopyButton value={cell.getValue<string>()}>
      {({ copied, copy }) => (
        <Tooltip
          color={copied ? 'green' : undefined}
          label={
            buttonProps?.title ?? (copied ? copiedToClipboard : clickToCopy)
          }
          openDelay={1000}
          withinPortal
        >
          <UnstyledButton
            {...buttonProps}
            className={clsx(
              'mrt-copy-button',
              classes.root,
              buttonProps?.className,
            )}
            onClick={(e) => {
              e.stopPropagation();
              copy();
            }}
            role="presentation"
            title={undefined}
          >
            {children}
          </UnstyledButton>
        </Tooltip>
      )}
    </CopyButton>
  );
};
