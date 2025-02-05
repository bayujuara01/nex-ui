import { createContext } from 'react';
import { noop } from "@nex-ui/core";
import type { ContextMenuSettings, ShowContextMenuFunction, HideContextMenuFunction, SubmenuPosition, WithRequiredProperty } from './types';

const DEFAULT_SETTINGS: WithRequiredProperty<
  ContextMenuSettings,
  'shadow' | 'borderRadius' | 'submenuDelay'
> = {
  shadow: 'sm',
  borderRadius: 'xs',
  submenuDelay: 500,
};

export const ContextMenuSettingsCtx = createContext(DEFAULT_SETTINGS);
export const ContextMenuCtx = createContext<{
  submenuPosition: SubmenuPosition;
  setSubmenuPosition: (position: SubmenuPosition) => void | null;
  showContextMenu: ShowContextMenuFunction;
  hideContextMenu: HideContextMenuFunction;
  isContextMenuVisible: boolean;
}>({
  showContextMenu: () => () => undefined,
  hideContextMenu: () => undefined,
  isContextMenuVisible: false,
  submenuPosition: null,
  setSubmenuPosition: noop
});
