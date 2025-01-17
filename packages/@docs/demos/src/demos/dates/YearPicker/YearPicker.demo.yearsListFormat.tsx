import { useState } from 'react';
import { YearPicker } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useState } from 'react';
import { YearPicker } from '@nex-ui/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker yearsListFormat="YY" value={value} onChange={setValue} />;
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker yearsListFormat="YY" value={value} onChange={setValue} />;
}

export const yearsListFormat: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
