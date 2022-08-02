import React from 'react';

import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import { useInView } from 'react-intersection-observer';

const Layout = ({ children }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <>
      {/* TODO: add color to header only after some scrolling */}
      <header
        className={`w-full transition ease-in-out z-[999] ${
          inView ? 'bg-transparent' : 'bg-rose-50 shadow-sm'
        }  fixed top-0 left-1/2 transform -translate-x-1/2`}
      >
        <Navbar />
      </header>
      <div className='h-16' ref={ref}></div>
      <main className='min-h-[calc(100vh-64px)] mx-auto'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
