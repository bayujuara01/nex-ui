'use client';
import { HomePage } from '@/components/HomePage';
import {ContextMenuProvider} from "@nex-ui/context-menu";
import '@nex-ui/core/styles.layer.css'
import '@nex-ui/context-menu/styles.css';

export default function Home() {
  return  <ContextMenuProvider>
    <HomePage />
    </ContextMenuProvider>;
}
