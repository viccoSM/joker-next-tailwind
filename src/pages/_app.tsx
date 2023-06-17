import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { AppContextProvider } from '@/context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light">
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
      </ThemeProvider>
    </>
  );
}
