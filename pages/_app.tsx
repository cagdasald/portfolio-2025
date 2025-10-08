import type { AppProps } from 'next/app';
import '../src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-[#050505]">
      <main className="w-full mx-auto">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
