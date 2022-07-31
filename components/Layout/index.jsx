import React from 'react';
import { motion } from 'framer-motion';

import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import { useInView } from 'react-intersection-observer';

const Layout = ({ children }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <>
      {/* TODO: add color to header only after some scrolling */}
      <header
        className={`w-full transition ease-in-out ${
          inView ? 'bg-transparent' : 'bg-rose-50 shadow-sm'
        }  fixed top-0 left-1/2 transform -translate-x-1/2 z-50`}
      >
        <Navbar />
      </header>
      <div className='h-16' ref={ref}></div>
      <motion.main
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        transition={{ type: 'linear' }}
        className='h-[calc(100vh-64px)] mx-auto px-2 overflow-hidden'
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
};

export default Layout;
