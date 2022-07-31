import React from 'react';
import { TbGlobe } from 'react-icons/tb';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

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

const Footer = () => {
  return (
    <>
      <footer className='flex justify-center items-center bg-rose-200 w-full'>
        <div className='flex w-full max-w-6xl md:flex-row flex-col justify-between md:items-center  items-start px-8 py-8'>
          <div>
            <div className='flex items-center'>
              <TbGlobe
                size={24}
                style={{
                  marginTop: '3px',
                }}
              />
              <h1 className='font-black text-2xl font-serif cursor-pointer ml-1'>
                Lena Ozer
              </h1>
            </div>
            <div className='flex space-x-2 mt-3 pl-1'>
              <FaFacebook size={20} />
              <FaTwitter size={20} />
            </div>
          </div>
          <ul className='space-y-2 mt-8 md:mt-0'>
            {routes.map(route => (
              <li key={route.href} className=''>
                <Link href={route.href} passHref>
                  <a className='font-semibold transition hover:opacity-75'>
                    {route.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
      <div className='mx-auto text-center py-8 font-bold text-sm text-gray-500'>
        Made w/ ❤️ &amp; Next.js
      </div>
    </>
  );
};

export default Footer;
