import { Button, TextInput } from '@nex-ui/core';
import { modals } from '@nex-ui/modals';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { TextInput, Button } from '@nex-ui/core';
import { modals } from '@nex-ui/modals';

function Demo() {
  return (
    <Button
      onClick={() => {
        modals.open({
          title: 'Subscribe to newsletter',
          children: (
            <>
              <TextInput label="Your email" placeholder="Your email" data-autofocus />
              <Button fullWidth onClick={() => modals.closeAll()} mt="md">
                Submit
              </Button>
            </>
          ),
        });
      }}
    >
      Open content modal
    </Button>
  );
}
`;

function Demo() {
  return (
    <Button
      onClick={() => {
        modals.open({
          title: 'Subscribe to newsletter',
          children: (
            <>
              <TextInput label="Your email" placeholder="Your email" data-autofocus />
              <Button fullWidth onClick={() => modals.closeAll()} mt="md">
                Submit
              </Button>
            </>
          ),
        });
      }}
    >
      Open content modal
    </Button>
  );
}

export const content: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
