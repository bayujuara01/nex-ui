import { Button } from '@nex-ui/core';
import { notifications } from '@nex-ui/notifications';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Button } from '@nex-ui/core';
import { notifications } from '@nex-ui/notifications';

function Demo() {
  return (
    <Button
      onClick={() => {
        Array(10).fill(0).forEach((_, index) => {
          setTimeout(() => {
            notifications.show({
              title: \`Notification \${index + 1}\`,
              message: 'Most notifications are added to queue',
            });
          }, 200 * index);
        });
      }}
    >
      Show 10 notifications
    </Button>
  );
}`;

function Demo() {
  return (
    <Button
      onClick={() => {
        Array(10)
          .fill(0)
          .forEach((_, index) => {
            setTimeout(() => {
              notifications.show({
                title: `Notification ${index + 1}`,
                message: 'Most notifications are added to queue',
              });
            }, 200 * index);
          });
      }}
    >
      Show 10 notifications
    </Button>
  );
}

export const limit: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
