import Router from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import nProgress from "nprogress";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
