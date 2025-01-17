import { DatePickerInput } from '@nex-ui/dates';
import { getSharedPickerInputDemos } from '../_shared';

export const { usage, multiple, range, configurator, modal, icon, clearable, valueFormatter } =
  getSharedPickerInputDemos(DatePickerInput);

export { valueFormat } from './DatePickerInput.demo.valueFormat';
export { disabled } from './DatePickerInput.demo.disabled';
