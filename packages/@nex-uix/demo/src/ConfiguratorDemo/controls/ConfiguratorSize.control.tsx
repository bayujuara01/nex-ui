import { BoxProps, ElementProps, Input, Slider } from '@nex-ui/core';
import { getControlLabel } from './get-control-label';
import { ConfiguratorControl } from './types';

const MARKS = [
  { value: 0, label: 'xs' },
  { value: 20, label: 'sm' },
  { value: 40, label: 'md' },
  { value: 60, label: 'lg' },
  { value: 80, label: 'xl' },
  { value: 100, label: '2xl' },
];

export type ConfiguratorSizeControlOptions = ConfiguratorControl<'size', { initialValue: string }>;

export interface ConfiguratorSizeControlProps extends BoxProps, ElementProps<'div', 'onChange'> {
  value: string;
  onChange: (value: string) => void;
  prop: string;
}

export function ConfiguratorSizeControl({
  value,
  onChange,
  prop,
  ...others
}: ConfiguratorSizeControlProps) {
  const _value = MARKS.find((mark) => mark.label === value)!.value;
  const handleChange = (val: number) => onChange(MARKS.find((mark) => mark.value === val)!.label);

  return (
    <Input.Wrapper labelElement="div" label={getControlLabel(prop)} {...others}>
      <Slider
        value={_value}
        onChange={handleChange}
        label={(val) => MARKS.find((mark) => mark.value === val)!.label}
        step={20}
        marks={MARKS}
        styles={{ markLabel: { display: 'none' } }}
        thumbLabel="Size"
      />
    </Input.Wrapper>
  );
}
