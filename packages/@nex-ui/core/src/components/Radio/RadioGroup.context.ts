import { createOptionalContext, NexSize } from '../../core';

interface RadioGroupContextValue {
  size: NexSize | undefined;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement> | string) => void;
  name: string;
}

export const [RadioGroupProvider, useRadioGroupContext] =
  createOptionalContext<RadioGroupContextValue>();
