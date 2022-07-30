import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import { TbGlobe } from 'react-icons/tb';

const routes = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () =>
      document.removeEventListener('click', handleClickOutside, true);
  }, []);

  return (
    <nav className='flex justify-between px-6 py-4 items-center max-w-7xl mx-auto w-full  z-50'>
      <div>
        <Link href='/' passHref>
          <div className='flex items-center' onClick={() => setOpen(false)}>
            <TbGlobe
              size={20}
              style={{
                marginTop: '3px',
              }}
            />
            <h1 className='font-black text-2xl font-serif cursor-pointer ml-1'>
              Lena Ozer
            </h1>
          </div>
        </Link>
      </div>

      <div
        ref={ref}
        className={`md:block md:relative md:top-0 md:w-fit md:p-0 ${
          open
            ? 'flex flex-col absolute top-[64px] left-0 space-y-8 w-full pt-4 pb-6 bg-rose-100 md:bg-transparent'
            : 'hidden'
        }`}
      >
        {routes.map(route => (
          <CustomLink href={route.href} key={route.href} setOpen={setOpen}>
            {route.name}
          </CustomLink>
        ))}
      </div>

      <button
        className={`inline-block md:hidden cursor-pointer ${
          open ? 'hidden' : ''
        }`}
        onClick={() => setOpen(true)}
      >
        <BiMenuAltRight size={30} />
      </button>
      <button
        className={`inline-block md:hidden cursor-pointer ${
          !open ? 'hidden' : ''
        }`}
        onClick={() => setOpen(false)}
      >
        <BiX size={30} />
      </button>
    </nav>
  );
};

export default Navbar;

const ActiveBorder = () => (
  <div className='h-1 w-8 bg-rose-400 absolute -bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block'></div>
);

const CustomLink = ({ children, href, setOpen }) => {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <a
        className={`md:ml-5 ml-8 py-2 md:p-0 text-sm font-semibold hover:underline  underline-offset-1`}
        onClick={() => setOpen(false)}
      >
        <span className='relative'>
          {children}
          {router.pathname === href && <ActiveBorder />}
        </span>
      </a>
    </Link>
  );
};
