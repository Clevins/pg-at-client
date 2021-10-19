import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/globals.css';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>My page</title>
        <link
          href="http://fonts.cdnfonts.com/css/montserrat"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
