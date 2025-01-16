import { useState } from 'react';
import { NexProvider } from './NexProvider';

export default { title: 'NexProvider' };

export function ForceColorScheme() {
  const [forceColorScheme, setForceColorScheme] = useState<'light' | 'dark' | undefined>(undefined);
  return (
    <div style={{ padding: 40 }}>
      <NexProvider forceColorScheme={forceColorScheme} defaultColorScheme="auto">
        <button type="button" onClick={() => setForceColorScheme('light')}>
          Force light
        </button>
        <button type="button" onClick={() => setForceColorScheme('dark')}>
          Force dark
        </button>
        <button type="button" onClick={() => setForceColorScheme(undefined)}>
          Force undefined
        </button>
      </NexProvider>
    </div>
  );
}
