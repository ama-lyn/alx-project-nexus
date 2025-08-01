import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import type { AppProps } from "next/app";
import Head from "next/head"
export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Head>
    <title>Zelia- Buy Rent Swap Books</title>
    <meta name="description" content="Buy Rent Swap Books" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="keywords" content="Buy Rent Swap Books" />
    <meta property="og:title" content="Zelia- Buy Rent Swap Books" />
    <meta property="og:description" content="Buy Rent Swap Books" />
    <meta property="og:type" content="website" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Layout>
    <Component {...pageProps} />
  </Layout>
</>
  );
}
