import clsx from 'clsx';

import commonClasses from './common.styles.module.css';
import classes from './NexTableTopToolbar.module.css';

import { Box, type BoxProps, Flex } from '@nex-ui/core';
import { useMediaQuery } from '@nex-ui/hooks';

import { NexTableProgressBar } from './NexTableProgressBar';
import { NexTablePagination } from './NexTablePagination';
import { NexTableToolbarAlertBanner } from './NexTableToolbarAlertBanner';
import { NexTableToolbarDropZone } from './NexTableToolbarDropZone';
import { NexTableToolbarInternalButtons } from './NexTableToolbarInternalButtons';

import { type NexRowData, type NexTableTableInstance } from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';
import { NexTableGlobalFilterTextInput } from '../inputs/NexTableGlobalFilterTextInput';

interface Props<TData extends NexRowData> extends BoxProps {
  table: NexTableTableInstance<TData>;
}

export const NexTableTopToolbar = <TData extends NexRowData>({
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: {
      enableGlobalFilter,
      enablePagination,
      enableToolbarInternalActions,
      mantineTopToolbarProps,
      positionGlobalFilter,
      positionPagination,
      positionToolbarAlertBanner,
      positionToolbarDropZone,
      renderTopToolbarCustomActions,
    },
    refs: { topToolbarRef },
  } = table;

  const { isFullScreen, showGlobalFilter } = getState();

  const isMobile = useMediaQuery('(max-width:720px)');
  const isTablet = useMediaQuery('(max-width:1024px)');

  const toolbarProps = {
    ...parseFromValuesOrFunc(mantineTopToolbarProps, { table }),
    ...rest,
  };

  const stackAlertBanner =
    isMobile ||
    !!renderTopToolbarCustomActions ||
    (showGlobalFilter && isTablet);

  const globalFilterProps = {
    style: !isTablet
      ? {
          zIndex: 3,
        }
      : undefined,
    table,
  };

  return (
    <Box
      {...toolbarProps}
      className={clsx(
        commonClasses['common-toolbar-styles'],
        classes['root'],
        isFullScreen && classes['root-fullscreen'],
        toolbarProps?.className,
      )}
      ref={(node: HTMLDivElement) => {
        if (node) {
          topToolbarRef.current = node;
          if (toolbarProps?.ref) {
            toolbarProps.ref.current = node;
          }
        }
      }}
    >
      {positionToolbarAlertBanner === 'top' && (
        <NexTableToolbarAlertBanner
          stackAlertBanner={stackAlertBanner}
          table={table}
        />
      )}
      {['both', 'top'].includes(positionToolbarDropZone ?? '') && (
        <NexTableToolbarDropZone table={table} />
      )}
      <Flex
        className={clsx(
          classes['actions-container'],
          stackAlertBanner && classes['actions-container-stack-alert'],
        )}
      >
        {enableGlobalFilter && positionGlobalFilter === 'left' && (
          <NexTableGlobalFilterTextInput {...globalFilterProps} />
        )}
        {renderTopToolbarCustomActions?.({ table }) ?? <span />}
        {enableToolbarInternalActions ? (
          <Flex justify={'end'} wrap={'wrap-reverse'}>
            {enableGlobalFilter && positionGlobalFilter === 'right' && (
              <NexTableGlobalFilterTextInput {...globalFilterProps} />
            )}
            <NexTableToolbarInternalButtons table={table} />
          </Flex>
        ) : (
          enableGlobalFilter &&
          positionGlobalFilter === 'right' && (
            <NexTableGlobalFilterTextInput {...globalFilterProps} />
          )
        )}
      </Flex>
      {enablePagination &&
        ['both', 'top'].includes(positionPagination ?? '') && (
          <Flex justify="end">
            <NexTablePagination position="top" table={table} />
          </Flex>
        )}
      <NexTableProgressBar isTopToolbar table={table} />
    </Box>
  );
};
