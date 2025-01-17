import { NumberFormatter } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { NumberFormatter } from '@nex-ui/core';

function Demo() {
  return (
    <>
      <div>
        With prefix: <NumberFormatter prefix="$ " value={100} />
      </div>
      <div>
        With suffix: <NumberFormatter value={100} suffix=" RUB" />
      </div>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <div>
        With prefix: <NumberFormatter prefix="$ " value={100} />
      </div>
      <div>
        With suffix: <NumberFormatter value={100} suffix=" RUB" />
      </div>
    </>
  );
}

export const prefixSuffix: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
