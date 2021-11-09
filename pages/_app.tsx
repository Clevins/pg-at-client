import React, { ReactElement, ReactNode } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import type { NextPage } from 'next'
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp(props: AppPropsWithLayout) {
  const { Component, pageProps } = props

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <Head>
        <title>My page</title>
        <link
          href="https://fonts.cdnfonts.com/css/montserrat"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>,
  )
}
