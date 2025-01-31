import { ActionIcon, type ActionIconProps, Tooltip } from '@nex-ui/core';

import {
  type HTMLPropsRef,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';

interface Props<TData extends NexRowData>
  extends ActionIconProps,
    HTMLPropsRef<HTMLButtonElement> {
  table: NexTableTableInstance<TData>;
}

export const NexTableToggleFiltersButton = <TData extends NexRowData>({
  table: {
    getState,
    options: {
      icons: { IconFilter, IconFilterOff },
      localization: { showHideFilters },
    },
    setShowColumnFilters,
  },
  title,
  ...rest
}: Props<TData>) => {
  const { showColumnFilters } = getState();

  return (
    <Tooltip label={title ?? showHideFilters} withinPortal>
      <ActionIcon
        aria-label={title ?? showHideFilters}
        color="gray"
        onClick={() => setShowColumnFilters((current) => !current)}
        size="lg"
        variant="subtle"
        {...rest}
      >
        {showColumnFilters ? <IconFilterOff /> : <IconFilter />}
      </ActionIcon>
    </Tooltip>
  );
};
