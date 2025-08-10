import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import type { AppProps } from "next/app";
import Head from "next/head"
import { PersistGate } from 'redux-persist/integration/react'; 
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};


export default function App ({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
  <>
  <Head>
    <title>The Circuit- Buy Rent Swap Books</title>
    <meta name="description" content="Buy Rent Swap Books" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="keywords" content="Buy Rent Swap Books" />
    <meta property="og:title" content="The Circuit- Buy Rent Swap Books" />
    <meta property="og:description" content="Buy Rent Swap Books" />
    <meta property="og:type" content="website" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
       {getLayout(<Component {...pageProps} />)}
      </PersistGate>
    </Provider>
</>
  );
}
