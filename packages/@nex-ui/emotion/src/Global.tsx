import { css, Global as EmotionGlobal } from '@emotion/react';
import { NexTheme, useNexTheme } from '@nex-ui/core';
import type { CSSObject } from './types';

type EmotionStyles = CSSObject | CSSObject[];

interface GlobalStylesProps {
  styles: EmotionStyles | ((theme: NexTheme) => EmotionStyles);
}

export function Global({ styles }: GlobalStylesProps) {
  const theme = useNexTheme();
  return (
    <EmotionGlobal styles={css((typeof styles === 'function' ? styles(theme) : styles) as any)} />
  );
}
