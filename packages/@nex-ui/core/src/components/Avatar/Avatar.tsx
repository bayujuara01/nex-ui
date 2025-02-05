import { useEffect, useState } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  getRadius,
  getSize,
  MantineColor,
  MantineGradient,
  MantineRadius,
  NexSize,
  polymorphicFactory,
  PolymorphicFactory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { AvatarGroup } from './AvatarGroup/AvatarGroup';
import { useAvatarGroupContext } from './AvatarGroup/AvatarGroup.context';
import { AvatarPlaceholderIcon } from './AvatarPlaceholderIcon';
import { getInitialsColor } from './get-initials-color/get-initials-color';
import { getInitials } from './get-initials/get-initials';
import classes from './Avatar.module.css';

export type AvatarStylesNames = 'root' | 'placeholder' | 'image';
export type AvatarVariant =
  | 'filled'
  | 'light'
  | 'gradient'
  | 'outline'
  | 'transparent'
  | 'default'
  | 'white';

export type AvatarCssVariables = {
  root: '--avatar-size' | '--avatar-radius' | '--avatar-bg' | '--avatar-color' | '--avatar-bd';
};

export interface AvatarProps extends BoxProps, StylesApiProps<AvatarFactory> {
  /** Width and height of the avatar, numbers are converted to rem, `'md'` by default */
  size?: NexSize | (string & {}) | number;

  /** Key of `theme.radius` or any valid CSS value to set border-radius, `'100%'` by default */
  radius?: MantineRadius;

  /** Key of `theme.colors` or any valid CSS color, default value is `'gray'`  */
  color?: MantineColor | 'initials';

  /** Gradient configuration used when `variant="gradient"`, default value is `theme.defaultGradient` */
  gradient?: MantineGradient;

  /** Image url, if the image cannot be loaded or `src={null}`, then placeholder is displayed instead */
  src?: string | null;

  /** Image `alt` attribute, also used as `title` attribute for placeholder */
  alt?: string;

  /** `img` tag attributes */
  imageProps?: React.ComponentPropsWithoutRef<'img'>;

  /** Avatar placeholder, displayed when `src={null}` or when the image cannot be loaded */
  children?: React.ReactNode;

  /** Determines whether text color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
  autoContrast?: boolean;

  /** Name of the user. When `src` is not set, used to display initials and to generate color when `color="initials"` is set. */
  name?: string;

  /** An array of colors that can be used for autogenerated initials. By default, all default Mantine colors can be used except gray and dark. */
  allowedInitialsColors?: MantineColor[];
}

export type AvatarFactory = PolymorphicFactory<{
  props: AvatarProps;
  defaultRef: HTMLDivElement;
  defaultComponent: 'div';
  stylesNames: AvatarStylesNames;
  vars: AvatarCssVariables;
  variant: AvatarVariant;
  staticComponents: {
    Group: typeof AvatarGroup;
  };
}>;

const defaultProps: Partial<AvatarProps> = {};

const varsResolver = createVarsResolver<AvatarFactory>(
  (
    theme,
    { size, radius, variant, gradient, color, autoContrast, name, allowedInitialsColors }
  ) => {
    const _color =
      color === 'initials' && typeof name === 'string'
        ? getInitialsColor(name, allowedInitialsColors)
        : color;

    const colors = theme.variantColorResolver({
      color: _color || 'gray',
      theme,
      gradient,
      variant: variant || 'light',
      autoContrast,
    });

    return {
      root: {
        '--avatar-size': getSize(size, 'avatar-size'),
        '--avatar-radius': radius === undefined ? undefined : getRadius(radius),
        '--avatar-bg': _color || variant ? colors.background : undefined,
        '--avatar-color': _color || variant ? colors.color : undefined,
        '--avatar-bd': _color || variant ? colors.border : undefined,
      },
    };
  }
);

export const Avatar = polymorphicFactory<AvatarFactory>((_props, ref) => {
  const props = useProps('Avatar', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    src,
    alt,
    radius,
    color,
    gradient,
    imageProps,
    children,
    autoContrast,
    mod,
    name,
    allowedInitialsColors,
    ...others
  } = props;
  const ctx = useAvatarGroupContext();
  const [error, setError] = useState(!src);

  const getStyles = useStyles<AvatarFactory>({
    name: 'Avatar',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  useEffect(() => setError(!src), [src]);

  return (
    <Box
      {...getStyles('root')}
      mod={[{ 'within-group': ctx.withinGroup }, mod]}
      ref={ref}
      {...others}
    >
      {error ? (
        <span {...getStyles('placeholder')} title={alt}>
          {children || (typeof name === 'string' && getInitials(name)) || <AvatarPlaceholderIcon />}
        </span>
      ) : (
        <img
          {...imageProps}
          {...getStyles('image')}
          src={src!}
          alt={alt}
          onError={(event) => {
            setError(true);
            imageProps?.onError?.(event);
          }}
        />
      )}
    </Box>
  );
});

Avatar.classes = classes;
Avatar.displayName = '@mantine/core/Avatar';
Avatar.Group = AvatarGroup;
