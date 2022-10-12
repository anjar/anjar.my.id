import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';

import Layout from 'layout/base';

import 'styles/font-awesome.css';
import 'tailwindcss/tailwind.css';

config.autoAddCss = false;

const gtmID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: gtmID });
  }, []);
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
