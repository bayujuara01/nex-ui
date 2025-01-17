import { useState } from 'react';
import { YearPicker, YearPickerProps } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useState } from 'react';
import { YearPicker, YearPickerProps } from '@nex-ui/dates';

const getYearControlProps: YearPickerProps['getYearControlProps'] = (date) => {
  if (date.getFullYear() === new Date().getFullYear()) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (date.getFullYear() === new Date().getFullYear() + 1) {
    return { disabled: true };
  }

  return {};
};

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker value={value} onChange={setValue} getYearControlProps={getYearControlProps} />;
}
`;

const getYearControlProps: YearPickerProps['getYearControlProps'] = (date) => {
  if (date.getFullYear() === new Date().getFullYear()) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (date.getFullYear() === new Date().getFullYear() + 1) {
    return { disabled: true };
  }

  return {};
};

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker value={value} onChange={setValue} getYearControlProps={getYearControlProps} />;
}

export const controlProps: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
