import type { BoxProps, ElementProps } from '@nex-ui/core';

export interface DevIconProps extends BoxProps, ElementProps<'svg', 'display' | 'opacity'> {
  size?: number | string;
}
