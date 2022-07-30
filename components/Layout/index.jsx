import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import React, { useRef, useState, useEffect } from 'react';

const Layout = ({ children }) => {
  const ref = useRef(null);
  const [transparent, setTransparent] = useState(true);

  //* consider converting to intersection observer API
  useEffect(() => {
    const headerHeight = ref.current.clientHeight;
    const range = 200;
    const offset = headerHeight / 2;

    const didScrollPage = e => {
      let solidState = 1 - (window.scrollY - offset + range) / range;
      let solid;
      console.log(solidState);
      if (solidState > 0) {
        solid = true;
      } else {
        solid = false;
      }

      setTransparent(solid);
    };

    window.addEventListener('scroll', didScrollPage);

    return () => {
      window.removeEventListener('keydown', didScrollPage);
    };
  }, []);

  return (
    <>
      {/* TODO: add color to header only after some scrolling */}
      <header
        ref={ref}
        className={`w-full ${
          transparent ? 'bg-transparent' : 'bg-rose-50 shadow-sm'
        }  fixed top-0 left-1/2 transform -translate-x-1/2 z-50`}
      >
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
