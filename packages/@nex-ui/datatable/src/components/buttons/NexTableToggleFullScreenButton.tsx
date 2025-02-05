import { useState } from 'react';

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

export const NexTableToggleFullScreenButton = <TData extends NexRowData>({
  table: {
    getState,
    options: {
      icons: { IconMaximize, IconMinimize },
      localization: { toggleFullScreen },
    },
    setIsFullScreen,
  },
  title,
  ...rest
}: Props<TData>) => {
  const { isFullScreen } = getState();
  const [tooltipOpened, setTooltipOpened] = useState(false);

  const handleToggleFullScreen = () => {
    setTooltipOpened(false);
    setIsFullScreen((current) => !current);
  };

  return (
    <Tooltip
      label={title ?? toggleFullScreen}
      opened={tooltipOpened}
      withinPortal
    >
      <ActionIcon
        aria-label={title ?? toggleFullScreen}
        color="gray"
        onClick={handleToggleFullScreen}
        onMouseEnter={() => setTooltipOpened(true)}
        onMouseLeave={() => setTooltipOpened(false)}
        size="lg"
        variant="subtle"
        {...rest}
      >
        {isFullScreen ? <IconMinimize /> : <IconMaximize />}
      </ActionIcon>
    </Tooltip>
  );
};
