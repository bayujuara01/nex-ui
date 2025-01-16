import { act, RenderResult, render as testingLibraryRender } from '@testing-library/react';
import { NexProvider, NexProviderProps, MantineThemeOverride } from '@nex-ui/core';

export function render(
  ui: React.ReactNode,
  themeOverride?: MantineThemeOverride,
  providerProps?: Omit<NexProviderProps, 'theme'>
) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <NexProvider theme={themeOverride} {...providerProps}>
        {children}
      </NexProvider>
    ),
  });
}

export async function renderWithAct(ui: React.ReactNode) {
  let result: RenderResult | null = null;
  await act(async () => {
    result = render(ui);
  });
  return result!;
}
