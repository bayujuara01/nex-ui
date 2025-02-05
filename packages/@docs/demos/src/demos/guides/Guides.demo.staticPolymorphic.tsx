import { forwardRef } from 'react';
import { Button, ButtonProps } from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { forwardRef } from 'react';
import { Button, ButtonProps } from '@nex-ui/core';

interface LinkButtonProps
  extends ButtonProps,
    Omit<React.ComponentPropsWithoutRef<'a'>, keyof ButtonProps> {}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>((props, ref) => (
  <Button {...props} ref={ref} component="a" />
));

function Demo() {
  return (
    <LinkButton href="https://mantine.dev" target="_blank">
      Mantine website
    </LinkButton>
  );
}
`;

interface LinkButtonProps
  extends ButtonProps,
    Omit<React.ComponentPropsWithoutRef<'a'>, keyof ButtonProps> {}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>((props, ref) => (
  <Button {...props} ref={ref} component="a" />
));

function Demo() {
  return (
    <LinkButton href="https://mantine.dev" target="_blank">
      Mantine website
    </LinkButton>
  );
}

export const staticPolymorphic: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
