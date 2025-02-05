import { BoxProps, ElementProps, Input, Slider } from '@nex-ui/core';
import { getControlLabel } from './get-control-label';
import { ConfiguratorControl } from './types';

export type CustomSizeData = {
  value: number;
  label: string;
};

const MARKS: CustomSizeData[] = [
  { value: 0, label: 'xs' },
  { value: 20, label: 'sm' },
  { value: 40, label: 'md' },
  { value: 60, label: 'lg' },
  { value: 80, label: 'xl' },
  { value: 100, label: '2xl' },
];

export type ConfiguratorCustomSizeControlOptions = ConfiguratorControl<
  'custom-size',
  {
    initialValue: string;
    step?: number;
    data?: CustomSizeData[];
  }
>;

export interface ConfiguratorCustomSizeControlProps extends BoxProps, ElementProps<'div', 'onChange'> {
  value: string;
  onChange: (value: string) => void;
  prop: string;
  step?: number;
  data?: CustomSizeData[];
}

export function ConfiguratorCustomSizeControl({ value, onChange, prop, data, step, ...others }: ConfiguratorCustomSizeControlProps) {
  const isHasCustomSize = data && data.length > 0;
  let _value = MARKS.find((mark) => mark.label === value)!.value;

  if (isHasCustomSize) {
    _value = data.find((mark) => mark.label === value)!.value;
  }

  const getLabel = (val: number) => {
    if (data && data.length > 0) return data.find((mark) => mark.label === value)!.label;
    return MARKS.find((mark) => mark.value === val)!.label;
  };
  const handleChange = (val: number) => {
    if (data && data.length > 0)  return onChange(data.find((mark) => mark.value === val)!.label);
    return onChange(MARKS.find((mark) => mark.value === val)!.label);
  }

  return (
    <Input.Wrapper labelElement="div" label={getControlLabel(prop)} {...others}>
      <Slider
        value={_value}
        onChange={handleChange}
        label={(val) => getLabel(val)}
        step={step ?? 20}
        marks={isHasCustomSize ? data : MARKS}
        styles={{ markLabel: { display: 'none' } }}
        thumbLabel="Size"
      />
    </Input.Wrapper>
  );
}
