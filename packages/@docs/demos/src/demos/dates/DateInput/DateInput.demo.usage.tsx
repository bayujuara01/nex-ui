import { useState } from 'react';
import { DateInput } from '@nex-ui/dates';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useState } from 'react';
import { DateInput } from '@nex-ui/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DateInput
      value={value}
      onChange={setValue}
      label="Date input"
      placeholder="Date input"
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DateInput value={value} onChange={setValue} label="Date input" placeholder="Date input" />
  );
}

export const usage: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
