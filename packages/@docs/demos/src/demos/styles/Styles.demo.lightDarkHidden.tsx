import { Button } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Button } from '@nex-ui/core';

function Demo() {
  return (
    <>
      <Button color="cyan" lightHidden>
        Visible in dark color scheme only
      </Button>

      <Button color="pink" darkHidden>
        Visible in light color scheme only
      </Button>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Button color="cyan" lightHidden>
        Visible in dark color scheme only
      </Button>

      <Button color="pink" darkHidden>
        Visible in light color scheme only
      </Button>
    </>
  );
}

export const lightDarkHidden: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
