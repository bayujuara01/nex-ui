import { Box } from '@nex-ui/core';
import clsx from 'clsx';
import type { ContextMenuItemOptions } from './types';
import classes from './ContextMenu.module.css'

export type ContextMenuDividerProps = Pick<ContextMenuItemOptions, 'className' | 'style'>;

export function ContextMenuDivider({ className, style }: ContextMenuDividerProps) {
  return <Box className={clsx(classes.divider, className)} style={style} />;
}
