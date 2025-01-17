import { MantineColor, parseThemeColor, useNexTheme } from '@nex-ui/core';

export type MantineLogoVariant = 'mantine.dev' | 'ui.mantine.dev';

export interface LogoProps extends React.ComponentPropsWithoutRef<'svg'> {
  color?: MantineColor;
  variant?: MantineLogoVariant;
  size?: number | string;
  inverted?: boolean;
}

export function useMantineLogoColors({ color, inverted }: LogoProps) {
  const theme = useNexTheme();
  const parsedColor = parseThemeColor({ color: color || 'blue', theme });
  const mainColor = parsedColor.isThemeColor ? theme.colors[parsedColor.color][5] : color;

  return {
    background: inverted ? theme.white : mainColor,
    color: inverted ? mainColor : theme.white,
  };
}
