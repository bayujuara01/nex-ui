import { renderHook } from '@testing-library/react';
import { NexProvider } from '../NexProvider';
import { useMantineColorScheme } from './use-mantine-color-scheme';

function Wrapper({ children }: { children: React.ReactNode }) {
  return <NexProvider defaultColorScheme="dark">{children}</NexProvider>;
}

describe('@mantine/core/MantineProvider/use-mantine-color-scheme', () => {
  it('returns color scheme from MantineProvider context', () => {
    const { result } = renderHook(() => useMantineColorScheme(), { wrapper: Wrapper });
    expect(result.current.colorScheme).toBe('dark');
  });

  describe('with default values', () => {
    function DefaultWrapper({ children }: { children: React.ReactNode }) {
      return <NexProvider>{children}</NexProvider>;
    }

    it('returns the correct color schema based on prefers-color-scheme', () => {
      const { result } = renderHook(() => useMantineColorScheme(), { wrapper: DefaultWrapper });
      expect(result.current.colorScheme).toBe('light');
    });
  });
});
