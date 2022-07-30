import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Layout = ({ children }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  console.log(inView);

  return (
    <>
      {/* TODO: add color to header only after some scrolling */}
      <header
        className={`w-full ${
          inView ? 'bg-transparent' : 'bg-rose-50 shadow-sm'
        }  fixed top-0 left-1/2 transform -translate-x-1/2 z-50`}
      >
        <Navbar />
      </header>
      <div className='h-16' ref={ref}></div>
      <main className='h-[calc(100vh-64px)] mx-auto px-2 overflow-hidden'>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
