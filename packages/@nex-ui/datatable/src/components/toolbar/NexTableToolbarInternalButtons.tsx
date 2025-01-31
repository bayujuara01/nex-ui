import clsx from 'clsx';

import classes from './NexTableToolbarInternalButtons.module.css';

import { Flex, type FlexProps } from '@nex-ui/core';

import { type NexRowData, type NexTableTableInstance } from '../../types';
import { NexTableShowHideColumnsButton } from '../buttons/NexTableShowHideColumnsButton';
import { NexTableToggleDensePaddingButton } from '../buttons/NexTableToggleDensePaddingButton';
import { NexTableToggleFiltersButton } from '../buttons/NexTableToggleFiltersButton';
import { NexTableToggleFullScreenButton } from '../buttons/NexTableToggleFullScreenButton';
import { NexTableToggleGlobalFilterButton } from '../buttons/NexTableToggleGlobalFilterButton';

interface Props<TData extends NexRowData> extends FlexProps {
  table: NexTableTableInstance<TData>;
}

export const NexTableToolbarInternalButtons = <TData extends NexRowData>({
  table,
  ...rest
}: Props<TData>) => {
  const {
    options: {
      columnFilterDisplayMode,
      enableColumnFilters,
      enableColumnOrdering,
      enableColumnPinning,
      enableDensityToggle,
      enableFilters,
      enableFullScreenToggle,
      enableGlobalFilter,
      enableHiding,
      initialState,
      renderToolbarInternalActions,
    },
  } = table;

  return (
    <Flex
      {...rest}
      className={clsx(
        'mrt-toolbar-internal-buttons',
        classes.root,
        rest?.className,
      )}
    >
      {renderToolbarInternalActions?.({ table }) ?? (
        <>
          {enableFilters &&
            enableGlobalFilter &&
            !initialState?.showGlobalFilter && (
              <NexTableToggleGlobalFilterButton table={table} />
            )}
          {enableFilters &&
            enableColumnFilters &&
            columnFilterDisplayMode !== 'popover' && (
              <NexTableToggleFiltersButton table={table} />
            )}
          {(enableHiding || enableColumnOrdering || enableColumnPinning) && (
            <NexTableShowHideColumnsButton table={table} />
          )}
          {enableDensityToggle && (
            <NexTableToggleDensePaddingButton table={table} />
          )}
          {enableFullScreenToggle && (
            <NexTableToggleFullScreenButton table={table} />
          )}
        </>
      )}
    </Flex>
  );
};
