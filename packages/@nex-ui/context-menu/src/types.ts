import {JSX, ReactNode} from 'react';
import {
  BoxProps, ElementProps, Factory,
  MantineColor,
  MantineRadius,
  MantineShadow,
  MantineStyleProp,
  StylesApiProps,
  StylesRecord
} from '@nex-ui/core';

/**
 * Utility type that makes a property required
 */
export type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property];
};

/**
 * Context menu options
 */
export type ContextMenuOptions = {
  /**
   * The z-index of context menu.
   * @default 9999
   */
  zIndex?: number;

  /**
   * Context menu container class name.
   */
  className?: string;

  /**
   * Context menu container style.
   */
  style?: MantineStyleProp;

  /**
   * Context menu elements class names.
   */
  classNames?: Partial<Record<'root' | 'item' | 'divider', string>>;

  /**
   * Context menu styles.
   * Can be an object with `root`, `item` and `divider` keys and style objects as values,
   * or a function that accepts the current theme and returns a similarly structured object.
   */
  styles?: StylesRecord<'root' | 'item' | 'divider', MantineStyleProp>;
};

/**
 * Generic context menu settings
 */
export type ContextMenuSettings = {
  /**
   * Context menu shadow.
   * @default 'sm'
   */
  shadow?: MantineShadow;

  /**
   * Context menu border radius.
   * @default 'xs'
   */
  borderRadius?: MantineRadius;

  /**
   * Delay in ms to use when showing and hiding submenus.
   * @default 500
   */
  submenuDelay?: number;
};

/**
 * Context menu provider props
 */
export type ContextMenuProviderProps = ContextMenuSettings &
  ContextMenuOptions & {
  children: React.ReactNode;
};

/**
 * Context menu item options
 */
export type ContextMenuItemOptions = {
  /**
   * Unique key of the context menu item or divider.
   */
  key: string;
  /**
   * Context menu item or divider className.
   */
  className?: string;

  /**
   * Context menu item or divider style.
   */
  style?: MantineStyleProp;

  /**
   * Boolean indicating whether the context menu item is hidden.
   */
  hidden?: boolean;
} & (
  | ({
  /**
   * Optional context menu item icon.
   */
  icon?: React.ReactNode;

  /**
   * Optional context menu item icon for the right side of the title.
   * If provided this will overwrite the submenu's ▶ icon
   */
  iconRight?: React.ReactNode;

  /**
   * Optional context menu item title.
   * If not provided, one will be generated automatically by "humanizing" the key.
   * @default humanize(key)
   */
  title?: React.ReactNode;

  /**
   * Optional context menu item color.
   */
  color?: MantineColor;

  /**
   * Boolean indicating whether the context menu item is disabled.
   */
  disabled?: boolean;
} & (
  | {
  /**
   * Optional context menu item `onClick` handler.
   * If not provided, a divider will be rendered instead.
   */
  onClick: React.MouseEventHandler<HTMLButtonElement>;

  items?: never;
}
  | {
  onClick?: never;

  /**
   * Optional items.
   * If provided, a submenu will be rendered.
   */
  items: ContextMenuItemOptions[];
}
  ))
  | {
  icon?: never;
  iconRight?: never;
  title?: never;
  color?: never;
  disabled?: never;
  onClick?: never;
  items?: never;
}
  );

export type ContextMenuInstanceOptions = {
  x: number;
  y: number;
  content: ContextMenuContent;
};

/**
 * Context menu content.
 * Either an array of context menu items, or a function that accepts a close callback and returns context menu content.
 */
export type ContextMenuContent = ContextMenuItemOptions[] | ((close: () => void) => JSX.Element);

/**
 * Show context menu function
 */
export type ShowContextMenuFunction = (
  /**
   * Context menu content.
   * Either an array of context menu items or a function that accepts a close callback and returns context menu content.
   */
  content: ContextMenuContent,

  /**
   * Context menu options (overrides provider props).
   */
  options?: ContextMenuProps
) => React.MouseEventHandler & React.TouchEventHandler;

/**
 * Hide context menu function
 */
export type HideContextMenuFunction = () => void;

export type SubmenuPosition = {
  x: number;
  y: number;
} | null;

export type ContextMenuStylesNames = 'root' | 'divider' | 'item';

export type ContextMenuVariant = 'default';

export type ContextMenuCssVariables = {
  root:
    | '--contextmenu-button-hover'
    | '--contextmenu-button-hover-color'
    | '--contextmenu-button-color'
    | '--contextmenu-button-pressed-color';
};

export interface ContextMenuProps extends ContextMenuInstanceOptions, BoxProps, StylesApiProps<ContextMenuFactory>, ElementProps<'div', 'title' | 'content'> {
  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: MantineColor;

  /**
   * Context menu container class name.
   */
  className?: string;

  /**
   * Context menu container style.
   */
  style?: MantineStyleProp;

  /**
   * The z-index of context menu.
   * @default 9999
   */
  zIndex?: number;

  /** ContextMenu title */
  title?: ReactNode;
  onHide: () => void;
}

export type ContextMenuFactory = Factory<{
  props: ContextMenuProps;
  ref: HTMLDivElement;
  styles: ContextMenuStylesNames,
  stylesNames: ContextMenuStylesNames;
  classNames: ContextMenuStylesNames;
  vars: ContextMenuCssVariables,
  variant: ContextMenuVariant;
}>;
