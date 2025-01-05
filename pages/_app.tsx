import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WalletContextProvider } from '../components/WalletContextProvider';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <WalletContextProvider>
        <Component {...pageProps} />
      </WalletContextProvider>
    </React.StrictMode>
  );
}
