import { Portal } from '@nex-ui/core';
import { useHotkeys, useWindowEvent } from '@nex-ui/hooks';
import React from "react";
import { ContextMenuOverlay } from './ContextMenuOverlay';
import {ContextMenuProps} from "./types";
import {ContextMenu} from "./ContextMenu";

export type ContextMenuPortalProps = ContextMenuProps & {
  onHide: ContextMenuProps['onHide'];
  zIndex?: number;
};

export function ContextMenuPortal({ onHide, zIndex, ...otherProps }: ContextMenuPortalProps) {
  useWindowEvent('resize', onHide);
  useWindowEvent('scroll', onHide);
  useHotkeys([['Escape', onHide]]);

  return (
    <Portal>
      <ContextMenuOverlay zIndex={zIndex} onHide={onHide}>
        <ContextMenu onHide={onHide} {...otherProps} />
      </ContextMenuOverlay>
    </Portal>
  );
}
