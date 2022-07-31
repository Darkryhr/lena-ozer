import { AnimatePresence, motion } from 'framer-motion';

import Layout from '@components/Layout';
import SEO from '@components/SEO';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
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
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
