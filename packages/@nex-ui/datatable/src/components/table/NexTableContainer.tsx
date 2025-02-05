import clsx from 'clsx';

import classes from './NexTableContainer.module.css';

import { useEffect, useLayoutEffect, useState } from 'react';

import { Box, type BoxProps, LoadingOverlay } from '@nex-ui/core';

import { NexTable } from './NexTable';

import { type NexRowData, type NexTableTableInstance } from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';
import { NexTableEditRowModal } from '../modals/NexTableEditRowModal';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface Props<TData extends NexRowData> extends BoxProps {
  table: NexTableTableInstance<TData>;
}

export const NexTableContainer = <TData extends NexRowData>({
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: {
      createDisplayMode,
      editDisplayMode,
      enableStickyHeader,
      mantineLoadingOverlayProps,
      mantineTableContainerProps,
    },
    refs: { bottomToolbarRef, tableContainerRef, topToolbarRef },
  } = table;
  const {
    creatingRow,
    editingRow,
    isFullScreen,
    isLoading,
    showLoadingOverlay,
  } = getState();

  const [totalToolbarHeight, setTotalToolbarHeight] = useState(0);

  const tableContainerProps = {
    ...parseFromValuesOrFunc(mantineTableContainerProps, { table }),
    ...rest,
  };
  const loadingOverlayProps = parseFromValuesOrFunc(
    mantineLoadingOverlayProps,
    { table },
  );

  useIsomorphicLayoutEffect(() => {
    const topToolbarHeight =
      typeof document !== 'undefined'
        ? (topToolbarRef.current?.offsetHeight ?? 0)
        : 0;

    const bottomToolbarHeight =
      typeof document !== 'undefined'
        ? (bottomToolbarRef?.current?.offsetHeight ?? 0)
        : 0;

    setTotalToolbarHeight(topToolbarHeight + bottomToolbarHeight);
  });

  const createModalOpen = createDisplayMode === 'modal' && creatingRow;
  const editModalOpen = editDisplayMode === 'modal' && editingRow;

  return (
    <Box
      {...tableContainerProps}
      __vars={{
        '--mrt-top-toolbar-height': `${totalToolbarHeight}`,
        ...tableContainerProps?.__vars,
      }}
      className={clsx(
        'mrt-table-container',
        classes.root,
        enableStickyHeader && classes['root-sticky'],
        isFullScreen && classes['root-fullscreen'],
        tableContainerProps?.className,
      )}
      ref={(node: HTMLDivElement) => {
        if (node) {
          tableContainerRef.current = node;
          if (tableContainerProps?.ref) {
            //@ts-ignore
            tableContainerProps.ref.current = node;
          }
        }
      }}
    >
      <LoadingOverlay
        visible={isLoading || showLoadingOverlay}
        zIndex={2}
        {...loadingOverlayProps}
      />
      <NexTable table={table} />
      {(createModalOpen || editModalOpen) && (
        <NexTableEditRowModal open table={table} />
      )}
    </Box>
  );
};
