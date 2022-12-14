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
    <nav className='flex justify-between px-6 py-4 items-center max-w-7xl mx-auto w-full'>
      <div>
        <Link href='/' passHref>
          <div
            className='flex items-center transition-opacity ease-in-out hover:opacity-70'
            onClick={() => setOpen(false)}
          >
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
            ? 'flex flex-col absolute top-[64px] left-0 w-full bg-rose-100 md:bg-transparent'
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
        className={`inline-block md:hidden transition hover:scale-110 hover:opacity-70 focus:scale-90 cursor-pointer ${
          open ? 'hidden' : ''
        }`}
        onClick={() => setOpen(true)}
      >
        <BiMenuAltRight size={30} />
      </button>
      <button
        className={`inline-block md:hidden transition hover:scale-110 hover:opacity-70 focus:scale-90 cursor-pointer ${
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
  const isActive = path => {
    if (href === '/') return path === href;
    else return path.includes(href);
  };

  return (
    <Link href={href} passHref>
      <a
        className={`md:pl-6 pl-8 md:py-2 py-6 md:p-0 text-sm transition font-semibold hover:underline md:hover:bg-transparent hover:opacity-75 underline-offset-1 hover:bg-rose-200`}
        onClick={() => setOpen(false)}
      >
        <span className='relative'>
          {children}
          {isActive(router.pathname) && <ActiveBorder />}
        </span>
      </a>
    </Link>
  );
};
