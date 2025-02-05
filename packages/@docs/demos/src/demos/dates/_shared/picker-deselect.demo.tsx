import { useState } from 'react';
import { MantineDemo } from '@nex-uix/demo';

const getCode = (name: string) => `
import { useState } from 'react';
import { ${name} } from '@nex-ui/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <${name} allowDeselect value={value} onChange={setValue} />;
}
`;

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<Date | null>(null);
    return <Component allowDeselect value={value} onChange={setValue} />;
  };
}

export function getPickerDeselectDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'code',
    centered: true,
    code: getCode(Component.displayName!.replace('@mantine/dates/', '')),
    component: getDemo(Component),
  };
}
