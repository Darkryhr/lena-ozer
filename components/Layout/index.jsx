import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      {/* TODO: add color to header only after some scrolling */}
      <header className='w-full bg-rose-50 shadow-sm fixed top-0 left-1/2 transform -translate-x-1/2 z-50'>
        <Navbar />
      </header>
      <main className='min-h-screen mx-auto px-2 overflow-hidden'>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
