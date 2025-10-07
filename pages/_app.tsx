import type { AppProps } from 'next/app';
import '../src/styles/globals.css';
import Navigation from '../src/components/Navigation';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
