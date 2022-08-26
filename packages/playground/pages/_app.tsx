import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from '../components/Layout'
import NavigationBar from '../components/NavigationBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NavigationBar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
