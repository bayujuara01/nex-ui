import { MantineDemo } from '@nex-uix/demo';
import { BaseDemo } from './_base';

const getCode = (prop: string) => `
import { Accordion } from '@nex-ui/core';

function Demo() {
  return (
    <Accordion ${prop}>
      {/* ...content */}
    </Accordion>
  )
}
`;

export const disableTransitions: MantineDemo = {
  type: 'code',
  component: () => <BaseDemo transitionDuration={0} maw={380} mx="auto" />,
  code: getCode('transitionDuration={0}'),
};

export const customTransitions: MantineDemo = {
  type: 'code',
  component: () => <BaseDemo transitionDuration={1000} maw={380} mx="auto" />,
  code: getCode('transitionDuration={1000}'),
};
