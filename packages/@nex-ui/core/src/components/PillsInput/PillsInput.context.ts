import { createOptionalContext, NexSize } from '../../core';
import { InputVariant } from '../Input';

export interface PillsInputContextValue {
  fieldRef: React.RefObject<HTMLInputElement | null>;
  size: NexSize | (string & {});
  disabled: boolean | undefined;
  hasError: boolean | undefined;
  variant: InputVariant | (string & {}) | undefined;
}

export const [PillsInputProvider, usePillsInputContext] =
  createOptionalContext<PillsInputContextValue>();
