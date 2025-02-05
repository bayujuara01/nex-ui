import { useContext } from 'react';
import {
  createVarsResolver,
  factory,
  Paper,
  px,
  useDirection,
  useProps,
  useStyles,
} from '@nex-ui/core';
import { useId, useResizeObserver } from '@nex-ui/hooks';
import { ContextMenuDivider } from './ContextMenuDivider';
import { ContextMenuItem } from './ContextMenuItem';
import { ContextMenuSettingsCtx } from './Context';
import type { ContextMenuFactory, ContextMenuProps } from './types';
import { humanize } from './utils';
import classes from './ContextMenu.module.css';
import clsx from "clsx";

const defaultProps: Partial<ContextMenuProps> = {};

const varsResolver = createVarsResolver<ContextMenuFactory>((theme, { variant, color }) => {
  const colors = theme.variantColorResolver({
    color: color || theme.primaryColor,
    theme,
    variant: variant || 'default',
  });

  return {
    root: {
      '--contextmenu-button-color': colors.color,
      '--contextmenu-button-hover': color || variant ? colors.hover : undefined,
      '--contextmenu-button-hover-color': color || variant ? colors.hoverColor : undefined,
      '--contextmenu-button-pressed-color': 'indigo',
    },
  };
});

export const ContextMenu = factory<ContextMenuFactory>((_props) => {
  const props = useProps('ContextMenu', defaultProps, _props);
  const {
    id,
    title,
    classNames,
    className,
    styles,
    style,
    unstyled,
    vars,
    zIndex,
    onHide,
    x,
    y,
    content,
  } = props;

  const getStyles = useStyles<ContextMenuFactory>({
    name: 'ContextMenu',
    classes,
    props,
    className,
    classNames,
    style,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const rootId = useId(id);
  const titleId = (title && `${rootId}-title`) || undefined;
  const bodyId = `${rootId}-body`;

  const { dir } = useDirection();
  const { shadow, borderRadius } = useContext(ContextMenuSettingsCtx);
  const [paperRef] = useResizeObserver<HTMLDivElement>();
  const { width, height } = paperRef.current?.getBoundingClientRect() || { width: 0, height: 0 };

  let windowWidth = 0;
  let windowHeight = 0;
  if (typeof window !== 'undefined') {
    ({ innerWidth: windowWidth, innerHeight: windowHeight } = window);
  }

  return (
    <Paper
      id={rootId}
      ref={paperRef}
      className={clsx(classes.root, className, getStyles('root').className)}
      style={[
        ({ spacing: { md } }) => {
          const mdSpacing = px(md) as number;
          return {
            zIndex,
            top: y + height + mdSpacing > windowHeight ? windowHeight - height - mdSpacing : y,
            left:
              dir === 'ltr'
                ? x + width + mdSpacing > windowWidth
                  ? windowWidth - width - mdSpacing
                  : x
                : windowWidth - mdSpacing - (x - width - mdSpacing < 0 ? width + mdSpacing : x),
          };
        },
        getStyles('root').style
      ]}
      aria-label={classes.root}
      shadow={shadow}
      radius={borderRadius}
      aria-describedby={bodyId}
      aria-labelledby={titleId}
    >
      {Array.isArray(content)
        ? content.map(({ key, hidden, className, style, onClick, items, title, ...other }) => {
          if (hidden) {  return null; }

            if (onClick || items) {
              return (
                <ContextMenuItem
                  key={key}
                  title={title ?? humanize(key)}
                  onHide={onHide}
                  onClick={onClick}
                  hidden={hidden}
                  style={style}
                  className={clsx(className)}
                  items={items}
                  {...other}
                />
              );
            }

            return (
              <ContextMenuDivider key={key} className={classes.divider} />
            );
          })
        : content(onHide) }
    </Paper>
  );
});

ContextMenu.classes = classes;
ContextMenu.displayName = '@nex-ui/ContextMenu';
