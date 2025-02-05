import { ActionIcon, type ActionIconProps, Tooltip } from '@nex-ui/core';

import {
  type HTMLPropsRef,
  type NexTableDensityState,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';

interface Props<TData extends NexRowData>
  extends ActionIconProps,
    HTMLPropsRef<HTMLButtonElement> {
  table: NexTableTableInstance<TData>;
}

const next: Record<NexTableDensityState, NexTableDensityState> = {
  md: 'xs',
  xl: 'md',
  xs: 'xl',
};

export const NexTableToggleDensePaddingButton = <TData extends NexRowData>({
  table: {
    getState,
    options: {
      icons: {
        IconBaselineDensityLarge,
        IconBaselineDensityMedium,
        IconBaselineDensitySmall,
      },
      localization: { toggleDensity },
    },
    setDensity,
  },
  title,
  ...rest
}: Props<TData>) => {
  const { density } = getState();

  return (
    <Tooltip label={title ?? toggleDensity} withinPortal>
      <ActionIcon
        aria-label={title ?? toggleDensity}
        color="gray"
        onClick={() => setDensity((current) => next[current])}
        size="lg"
        variant="subtle"
        {...rest}
      >
        {density === 'xs' ? (
          <IconBaselineDensitySmall />
        ) : density === 'md' ? (
          <IconBaselineDensityMedium />
        ) : (
          <IconBaselineDensityLarge />
        )}
      </ActionIcon>
    </Tooltip>
  );
};
