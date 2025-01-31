import clsx from 'clsx';

import classes from './NexTablePaper.module.css';

import { Paper, type PaperProps } from '@nex-ui/core';

import { NexTableContainer } from './NexTableContainer';

import { type NexRowData, type NexTableTableInstance } from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';
import { NexTableBottomToolbar } from '../toolbar/NexTableBottomToolbar';
import { NexTableTopToolbar } from '../toolbar/NexTableTopToolbar';

interface Props<TData extends NexRowData> extends PaperProps {
  table: NexTableTableInstance<TData>;
}

export const NexTablePaper = <TData extends NexRowData>({
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: {
      enableBottomToolbar,
      enableTopToolbar,
      mantinePaperProps,
      renderBottomToolbar,
      renderTopToolbar,
    },
    refs: { tablePaperRef },
  } = table;
  const { isFullScreen } = getState();

  const tablePaperProps = {
    ...parseFromValuesOrFunc(mantinePaperProps, { table }),
    ...rest,
  };

  return (
    <Paper
      shadow="xs"
      withBorder
      {...tablePaperProps}
      className={clsx(
        'mrt-table-paper',
        classes.root,
        isFullScreen && 'mrt-table-paper-fullscreen',
        tablePaperProps?.className,
      )}
      ref={(ref: HTMLDivElement) => {
        tablePaperRef.current = ref;
        if (tablePaperProps?.ref) {
          tablePaperProps.ref.current = ref;
        }
      }}
      // rare case where we should use inline styles to guarantee highest specificity
      style={(theme) => ({
        zIndex: isFullScreen ? 200 : undefined,
        ...parseFromValuesOrFunc(tablePaperProps?.style, theme),
        ...(isFullScreen
          ? {
              border: 0,
              borderRadius: 0,
              bottom: 0,
              height: '100vh',
              left: 0,
              margin: 0,
              maxHeight: '100vh',
              maxWidth: '100vw',
              padding: 0,
              position: 'fixed',
              right: 0,
              top: 0,
              width: '100vw',
            }
          : null),
      })}
    >
      {enableTopToolbar &&
        (parseFromValuesOrFunc(renderTopToolbar, { table }) ?? (
          <NexTableTopToolbar table={table} />
        ))}
      <NexTableContainer table={table} />
      {enableBottomToolbar &&
        (parseFromValuesOrFunc(renderBottomToolbar, { table }) ?? (
          <NexTableBottomToolbar table={table} />
        ))}
    </Paper>
  );
};
