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

export const NexTableToggleGlobalFilterButton = <TData extends NexRowData>({
  table: {
    getState,
    options: {
      icons: { IconSearch, IconSearchOff },
      localization: { showHideSearch },
    },
    refs: { searchInputRef },
    setShowGlobalFilter,
  },
  title,
  ...rest
}: Props<TData>) => {
  const { globalFilter, showGlobalFilter } = getState();

  const handleToggleSearch = () => {
    setShowGlobalFilter(!showGlobalFilter);
    setTimeout(() => searchInputRef.current?.focus(), 100);
  };

  return (
    <Tooltip label={title ?? showHideSearch} withinPortal>
      <ActionIcon
        aria-label={title ?? showHideSearch}
        color="gray"
        disabled={!!globalFilter}
        onClick={handleToggleSearch}
        size="lg"
        variant="subtle"
        {...rest}
      >
        {showGlobalFilter ? <IconSearchOff /> : <IconSearch />}
      </ActionIcon>
    </Tooltip>
  );
};
