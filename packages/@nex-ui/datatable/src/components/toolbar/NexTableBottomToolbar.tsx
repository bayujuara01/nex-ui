import clsx from 'clsx';

import commonClasses from './common.styles.module.css';
import classes from './NexTableBottomToolbar.module.css';

import { Box, type BoxProps } from '@nex-ui/core';
import { useMediaQuery } from '@nex-ui/hooks';

import { NexTableProgressBar } from './NexTableProgressBar';
import { NexTablePagination } from './NexTablePagination';
import { NexTableToolbarAlertBanner } from './NexTableToolbarAlertBanner';
import { NexTableToolbarDropZone } from './NexTableToolbarDropZone';

import { type NexRowData, type NexTableTableInstance } from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';

interface Props<TData extends NexRowData> extends BoxProps {
  table: NexTableTableInstance<TData>;
}

export const NexTableBottomToolbar = <TData extends NexRowData>({
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: {
      enablePagination,
      mantineBottomToolbarProps,
      positionPagination,
      positionToolbarAlertBanner,
      positionToolbarDropZone,
      renderBottomToolbarCustomActions,
    },
    refs: { bottomToolbarRef },
  } = table;
  const { isFullScreen } = getState();

  const isMobile = useMediaQuery('(max-width: 720px)');

  const toolbarProps = {
    ...parseFromValuesOrFunc(mantineBottomToolbarProps, {
      table,
    }),
    ...rest,
  };

  const stackAlertBanner = isMobile || !!renderBottomToolbarCustomActions;

  return (
    <Box
      {...toolbarProps}
      className={clsx(
        'mrt-bottom-toolbar',
        classes.root,
        commonClasses['common-toolbar-styles'],
        isFullScreen && classes['root-fullscreen'],
        toolbarProps?.className,
      )}
      ref={(node: HTMLDivElement) => {
        if (node) {
          bottomToolbarRef.current = node;
          if (toolbarProps?.ref) {
            toolbarProps.ref.current = node;
          }
        }
      }}
    >
      <NexTableProgressBar isTopToolbar={false} table={table} />
      {positionToolbarAlertBanner === 'bottom' && (
        <NexTableToolbarAlertBanner
          stackAlertBanner={stackAlertBanner}
          table={table}
        />
      )}
      {['both', 'bottom'].includes(positionToolbarDropZone ?? '') && (
        <NexTableToolbarDropZone table={table} />
      )}
      <Box className={classes['custom-toolbar-container']}>
        {renderBottomToolbarCustomActions ? (
          renderBottomToolbarCustomActions({ table })
        ) : (
          <span />
        )}
        <Box
          className={clsx(
            classes['paginator-container'],
            stackAlertBanner && classes['paginator-container-alert-banner'],
          )}
        >
          {enablePagination &&
            ['both', 'bottom'].includes(positionPagination ?? '') && (
              <NexTablePagination position="bottom" table={table} />
            )}
        </Box>
      </Box>
    </Box>
  );
};
