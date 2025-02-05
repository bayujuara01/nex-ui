import Link from 'next/link';
import cx from 'clsx';
import { FOCUS_CLASS_NAMES, VisuallyHidden } from '@nex-ui/core';
import { MantineLogoProps } from '@nex-uix/nex-ui-logo';
import NexLogo from '@/components/LogoAssets/assets/nex-ui-logo-white.svg'
import classes from './Logo.module.css';
import Image from "next/image";

export function Logo(props: MantineLogoProps) {
  return (
    <Link href="/" className={cx(classes.logo, FOCUS_CLASS_NAMES.auto)} aria-label="Nex UI">
      <VisuallyHidden>
        Welcome to Nex UI, React components library that you always wished for
      </VisuallyHidden>
      <Image style={{ height: 50, width: 120 }} src={NexLogo} alt="Nexsoft"/>
    </Link>
  );
}
