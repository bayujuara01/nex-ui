import { BoxProps, ElementProps, Input, Slider } from '@nex-ui/core';
import { getControlLabel } from './get-control-label';
import { ConfiguratorControl } from './types';

const MARKS = [
  { value: 1, label: '3xs' },
  { value: 2, label: '2xs' },
  { value: 3, label: 'xs' },
  { value: 4, label: 'sm' },
  { value: 5, label: 'md' },
  { value: 6, label: 'lg' },
  { value: 7, label: 'xl' },
  { value: 8, label: '2xl' },
  { value: 9, label: '3xl' },
  { value: 10, label: '4xl' },
  { value: 11, label: '5xl' },
  { value: 12, label: '6xl' },
  { value: 13, label: 'full' },
];

export type ConfiguratorRadiusControlOptions = ConfiguratorControl<
  'radius',
  { initialValue: string }
>;

export interface ConfiguratorRadiusControlProps extends BoxProps, ElementProps<'div', 'onChange'> {
  value: string;
  onChange: (value: string) => void;
  prop: string;
}

export function ConfiguratorRadiusControl({
  value,
  onChange,
  prop,
  ...others
}: ConfiguratorRadiusControlProps) {
  const _value = MARKS.find((mark) => mark.label === value)!.value;
  const handleChange = (val: number) => onChange(MARKS.find((mark) => mark.value === val)!.label);

  return (
    <Input.Wrapper labelElement="div" label={getControlLabel(prop)} {...others}>
      <Slider
        value={_value}
        onChange={handleChange}
        label={(val) => MARKS.find((mark) => mark.value === val)!.label}
        step={1}
        min={1}
        max={13}
        marks={MARKS}
        styles={{ markLabel: { display: 'none' } }}
        thumbLabel="Radius"
      />
    </Input.Wrapper>
  );
}
