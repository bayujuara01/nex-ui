import { createOptionalContext, NexSize } from '../../core';

export interface PillGroupContextValue {
  size: NexSize | (string & {}) | undefined;
  disabled: boolean | undefined;
}

export const [PillGroupProvider, usePillGroupContext] =
  createOptionalContext<PillGroupContextValue>();
