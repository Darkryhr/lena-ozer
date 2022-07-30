import Layout from '@components/Layout';
import SEO from '@components/SEO';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <SEO />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
