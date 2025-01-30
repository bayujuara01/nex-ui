import {useContext, useRef, type MouseEventHandler, useState} from 'react';
import { Box, parseThemeColor, rgba, UnstyledButton } from '@nex-ui/core';
import { useMediaQuery, useTimeout } from '@nex-ui/hooks';
import clsx from 'clsx';
import { ContextMenuSettingsCtx } from './Context';
import type {ContextMenuContent, ContextMenuItemOptions, SubmenuPosition, WithRequiredProperty} from './types';
import classes from './ContextMenu.module.css';
import {ContextMenu} from "./ContextMenu";

export function ContextMenuItem({
  className,
  style,
  icon,
  iconRight,
  title,
  color,
  disabled,
  onClick,
  onHide,
  items,
}: WithRequiredProperty<Omit<ContextMenuItemOptions, 'key'>, 'title'> & {
  onHide: () => void;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const { submenuDelay } = useContext(ContextMenuSettingsCtx);
  const [ submenuPosition, setSubmenuPosition ] = useState<SubmenuPosition | null>(null);

  const hoverAvailable = useMediaQuery(`(hover: hover)`);

  const { start: startShowingSubmenu, clear: stopShowingSubmenu } = useTimeout(() => {
    const { top: y, right: x } = ref.current!.getBoundingClientRect();
    setSubmenuPosition({ x, y });
  }, submenuDelay);

  const { start: startHidingSubmenu, clear: stopHidingSubmenu } = useTimeout(() => {
    setSubmenuPosition(null);
  }, submenuDelay);

  const showSubmenu = () => {
    stopHidingSubmenu();
    startShowingSubmenu();
  };

  const hideSubmenu = () => {
    stopShowingSubmenu();
    startHidingSubmenu();
  };

  const hasSubmenu = items && !disabled;
  const showSubmenuOnHover = hasSubmenu && hoverAvailable;

  const handleClick: MouseEventHandler<HTMLButtonElement> | undefined = (() => {
    if (hasSubmenu) {
      return (e) => {
        e.stopPropagation();
        showSubmenu();
      };
    }

    if (onClick) {
      return (e) => {
        onHide();
        onClick!(e);
      };
    }

    return undefined;
  })();

  return (
    <div
      onMouseEnter={showSubmenuOnHover ? showSubmenu : undefined}
      onMouseLeave={showSubmenuOnHover ? hideSubmenu : undefined}
    >
      <UnstyledButton
        ref={ref}
        className={clsx(classes.item, className)}
        style={[
          (theme) => {
            const { colors } = theme;
            const parsedColor = color ? parseThemeColor({ color, theme }).value : undefined;
            return {
              '---contextmenu-item-button-color': parsedColor
                ? parsedColor
                : 'var(--mantine-color-text)',
              '--contextmenu-item-button-hover-bg-color-light': parsedColor
                ? rgba(parsedColor, 0.08)
                : rgba(colors.gray[4], 0.25),
              '--contextmenu-item-button-hover-bg-color-dark': parsedColor
                ? rgba(parsedColor, 0.15)
                : rgba(colors.dark[3], 0.25),
              '--contextmenu-item-button-pressed-bg-color-light': parsedColor
                ? rgba(parsedColor, 0.2)
                : rgba(colors.gray[4], 0.5),
              '--contextmenu-item-button-pressed-bg-color-dark': parsedColor
                ? rgba(parsedColor, 0.3)
                : rgba(colors.dark[3], 0.5),
            };
          },
          style,
        ]}
        disabled={disabled}
        onClick={handleClick}
      >
        {icon && (
          <Box fz={0} mr="xs" mt={-2}>
            {icon}
          </Box>
        )}
        <div className={classes.itemButtonTitle}>{title}</div>
        {iconRight ? (
          <Box fz={0} ml="xs" mt={-2}>
            {iconRight}
          </Box>
        ) : (
          items && (
            <Box fz={10} mt={-2} ml="xs">
              ▶
            </Box>
          )
        )}
        {submenuPosition && <ContextMenu content={items as ContextMenuContent} onHide={onHide}  x={submenuPosition?.x ?? 0} y={submenuPosition?.y ?? 0}  />}
      </UnstyledButton>
    </div>
  );
}
