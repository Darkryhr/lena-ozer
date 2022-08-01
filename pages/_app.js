import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Layout from '@components/Layout';
import SEO from '@components/SEO';
import Loader from '@components/Loader';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      document.body.style.overflow = 'hidden';
      setPageLoading(true);
    };

    const handleComplete = () => {
      document.body.style.overflow = '';
      setPageLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return (
    <Layout>
      <SEO />
      <AnimatePresence exitBeforeEnter={true} initial={false}>
        <motion.main
          initial='pageInitial'
          animate='pageAnimate'
          style={{ width: '100%' }}
          key={router.route}
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          {pageLoading ? <Loader /> : <Component {...pageProps} />}
        </motion.main>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
