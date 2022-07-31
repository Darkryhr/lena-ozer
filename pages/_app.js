import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

import Layout from '@components/Layout';
import SEO from '@components/SEO';
import Loader from '@components/Loader';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [pageLoading, setPageLoading] = useState(false);
  const router = useRouter();

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

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <Layout>
      <SEO />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.main
          initial='hidden'
          animate='enter'
          exit='exit'
          variants={variants}
          transition={{ type: 'linear' }}
        >
          {pageLoading ? <Loader /> : <Component {...pageProps} />}
        </motion.main>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
