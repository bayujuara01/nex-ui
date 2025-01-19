import { em, keys, px } from '../../utils';
import { useMantineStyleNonce } from '../Nex.context';
import { useNexTheme } from '../NexThemeProvider';

export function MantineClasses() {
  const theme = useNexTheme();
  const nonce = useMantineStyleNonce();

  const classes = keys(theme.breakpoints).reduce<string>((acc, breakpoint) => {
    const isPxBreakpoint = theme.breakpoints[breakpoint].includes('px');
    const pxValue = px(theme.breakpoints[breakpoint]) as number;
    const maxWidthBreakpoint = isPxBreakpoint ? `${pxValue - 0.1}px` : em(pxValue - 0.1);
    const minWidthBreakpoint = isPxBreakpoint ? `${pxValue}px` : em(pxValue);

    return `${acc}@media (max-width: ${maxWidthBreakpoint}) {.mantine-visible-from-${breakpoint} {display: none !important;}}@media (min-width: ${minWidthBreakpoint}) {.mantine-hidden-from-${breakpoint} {display: none !important;}}`;
  }, '');

  return (
    <style
      data-mantine-styles="classes"
      nonce={nonce?.()}
      dangerouslySetInnerHTML={{ __html: classes }}
    />
  );
}
