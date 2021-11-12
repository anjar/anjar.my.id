import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import 'styles/font-awesome.css';
import 'styles/tailwind.css';

config.autoAddCss = false;

const gtmID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    TagManager.initialize({ gtmId: gtmID });
  }, []);
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default MyApp;