import { useContext, useState } from 'react';
import { ContextMenuPortal } from './ContextMenuPortal';
import type {
  ContextMenuProviderProps,
  ContextMenuProps,
  SubmenuPosition
} from './types';
import { ContextMenuSettingsCtx, ContextMenuCtx } from './Context';

const DEFAULT_SETTINGS = {
  shadow: 'sm',
  borderRadius: '2xs',
  submenuDelay: 500,
};

export type ContextMenuProviderData =
  | 'x'
  | 'y'
  | 'content'
  | 'zIndex'
  | 'className'
  | 'classNames'
  | 'style'
  | 'styles';

/**
 * Provider that allows to show a context menu anywhere in your application.
 * If you wrap your application with this provider, you can use the `useContextMenu` hook
 * anywhere in the component tree to access a function that shows the context menu.
 */
export function ContextMenuProvider({
  zIndex = 9999,
  shadow = DEFAULT_SETTINGS.shadow,
  borderRadius = DEFAULT_SETTINGS.borderRadius,
  submenuDelay = DEFAULT_SETTINGS.submenuDelay,
  children,
}: ContextMenuProviderProps) {
  const [submenuPosition, setSubmenuPosition] = useState<SubmenuPosition>(null);
  const [data, setData] = useState<Pick<ContextMenuProps, ContextMenuProviderData> | null>(null);

  const hideContextMenu = () => {
    setData(null);
  };

  const showContextMenu: (content: any, options: any) => (e: React.MouseEvent | React.TouchEvent) => void = (content, options) => (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const { x, y } =
        'touches' in e
          ? { x: e.touches.item(0).clientX, y: e.touches.item(0).clientY }
          : { x: e.clientX, y: e.clientY };

      setData({
        x,
        y,
        content,
        zIndex: options?.zIndex || zIndex,
        className: options?.className,
        style: options?.style,
        classNames: options?.classNames,
        styles: options?.styles,
      });
    };

  return (
    <ContextMenuSettingsCtx.Provider value={{ shadow, borderRadius, submenuDelay }}>
      <ContextMenuCtx.Provider
        value={{ showContextMenu, hideContextMenu, isContextMenuVisible: !!data, submenuPosition, setSubmenuPosition }}
      >
        {children}
        {data && <ContextMenuPortal zIndex={data.zIndex} onHide={hideContextMenu} {...data}/> }
      </ContextMenuCtx.Provider>
    </ContextMenuSettingsCtx.Provider>
  );
}

/**
 * Hook returning functions that show and hide the context menu.
 */
export function useContextMenu() {
  return useContext(ContextMenuCtx);
}
