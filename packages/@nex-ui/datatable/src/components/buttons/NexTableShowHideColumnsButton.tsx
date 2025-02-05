import { ActionIcon, type ActionIconProps, Menu, Tooltip } from '@nex-ui/core';

import {
  type HTMLPropsRef,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';
import { NexTableShowHideColumnsMenu } from '../menus/NexTableShowHideColumnsMenu';

interface Props<TData extends NexRowData>
  extends ActionIconProps,
    HTMLPropsRef<HTMLButtonElement> {
  table: NexTableTableInstance<TData>;
}

export const NexTableShowHideColumnsButton = <TData extends NexRowData>({
  table,
  title,
  ...rest
}: Props<TData>) => {
  const {
    icons: { IconColumns },
    localization: { showHideColumns },
  } = table.options;

  return (
    <Menu closeOnItemClick={false} withinPortal>
      <Tooltip label={title ?? showHideColumns} withinPortal>
        <Menu.Target>
          <ActionIcon
            aria-label={title ?? showHideColumns}
            color="gray"
            size="lg"
            variant="subtle"
            {...rest}
          >
            <IconColumns />
          </ActionIcon>
        </Menu.Target>
      </Tooltip>
      <NexTableShowHideColumnsMenu table={table} />
    </Menu>
  );
};
