import { useRouter } from 'next/router';
import { useComputedColorScheme, useDirection, useMantineColorScheme } from '@nex-ui/core';
import { useHotkeys } from '@nex-ui/hooks';

const EXCLUDE_RTL = ['/combobox'];

export function HotKeysHandler() {
  const router = useRouter();
  const { setColorScheme } = useMantineColorScheme();
  const { toggleDirection } = useDirection();
  const computedColorScheme = useComputedColorScheme('light');
  useHotkeys(
    [
      ['mod + J', () => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')],
      ['mod + shift + L', () => !EXCLUDE_RTL.includes(router.pathname) && toggleDirection()],
    ],
    []
  );
  return <>{null}</>;
}
