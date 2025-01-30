import '@nex-ui/core/styles.css';
import '@nex-ui/dates/styles.css';
import '@nex-ui/notifications/styles.css';
import '@nex-ui/code-highlight/styles.css';
import '@nex-ui/dropzone/styles.css';
import '@nex-ui/nprogress/styles.css';
import '@nex-ui/spotlight/styles.css';
import '@nex-ui/carousel/styles.css';
import '@nex-ui/tiptap/styles.css';
import '@nex-ui/charts/styles.css';
import '@nex-uix/demo/styles.css';
import '@nex-uix/nex-ui-logo/styles.css';
import '@nex-uix/nex-ui-header/styles.css';
import '@nex-uix/shiki/styles.css';
import '@docs/demos/styles.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { DirectionProvider, NexProvider } from '@nex-ui/core';
import { NexEmotionProvider } from '@nex-ui/emotion';
import { useHotkeys, useLocalStorage } from '@nex-ui/hooks';
import { Notifications } from '@nex-ui/notifications';
import { ShikiProvider } from '@nex-uix/shiki';
import { GaScript } from '@/components/GaScript';
import { HotKeysHandler } from '@/components/HotKeysHandler';
import { MdxProvider } from '@/components/MdxProvider';
import { ModalsProviderDemo } from '@/components/ModalsProviderDemo';
import { Search } from '@/components/Search';
import { Shell } from '@/components/Shell';
import { FontsStyle } from '@/fonts';
import { theme } from '../../theme';
import { emotionCache } from '../emotion';
import '../styles/variables.css';
import {useEffect, useMemo, useState} from "react";
import {HeaderControlsProps} from "@/components/Shell/Header/Header";
import {headerControlsProperties} from "@/constants/properties-constant";

const excludeShell = ['/', '/combobox', '/app-shell'];

async function loadShiki() {
  const { getHighlighter } = await import('shiki');
  const shiki = await getHighlighter({
    langs: ['tsx', 'scss', 'html', 'bash', 'json'],
    themes: [],
  });

  return shiki;
}
const color = ['red', 'orange', 'blue', 'green', 'yellow', 'violet'];
export default function App({ Component, pageProps, router }: AppProps) {
  const [themeState, setThemeState] = useState(theme);
  const shouldRenderShell = !excludeShell.includes(router.pathname);
  const [navbarOpened, setNavbarOpened] = useLocalStorage({
    key: 'mantine-navbar-opened',
    defaultValue: true,
  });

  useHotkeys([['mod + alt + N', () => setNavbarOpened(!navbarOpened)]]);

  useEffect(() => {
    const interval = setInterval(() => setThemeState((theme) => {
      const randomColor = color[Math.floor(Math.random() * color.length)]
      return { ...theme, primaryColor: randomColor}
    }), 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Nex UI</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta name="og:image:width" content="1280" />
        <meta name="og:image:height" content="640" />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@mantinedev" />
        <meta
          name="og:image"
          content="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/social-preview.png"
        />
      </Head>
      <GaScript />
      <FontsStyle />
      <DirectionProvider initialDirection="ltr" detectDirection={false}>
        <NexEmotionProvider cache={emotionCache}>
          <NexProvider theme={themeState} defaultColorScheme="light">
            <ShikiProvider loadShiki={loadShiki}>
              <Search />
              <Notifications />
              <ModalsProviderDemo>
                <MdxProvider>

                    <HotKeysHandler />
                    {shouldRenderShell ? (
                      <Shell withNavbar={navbarOpened} headerControlsProps={headerControlsProperties}>
                        <Component {...pageProps} />
                      </Shell>
                    ) : (
                      <Component {...pageProps} />
                    )}
                </MdxProvider>
              </ModalsProviderDemo>
            </ShikiProvider>
          </NexProvider>
        </NexEmotionProvider>
      </DirectionProvider>
    </>
  );
}
