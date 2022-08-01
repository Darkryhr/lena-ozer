import React from 'react';
import { TbGlobe } from 'react-icons/tb';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { IoMdHeart } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';

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
      <footer className='flex justify-center items-center bg-rose-200 w-full text-gray-800'>
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
      <div className='mx-auto text-center py-8 font-bold text-sm text-gray-500 flex items-center justify-center'>
        Made with
        <IoMdHeart className='mx-1.5 fill-rose-500' size={18} />
        by <GabLogo />
      </div>
    </>
  );
};

export default Footer;

const GabLogo = () => {
  return (
    <a
      href='https://www.gabriel-lellouche.com/'
      rel='noreferrer'
      target='_blank'
      className='transition hover:opacity-80'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlSpace='preserve'
        viewBox='0 0 398.5 111.5'
        className='fill-rose-500 w-16 inline-block ml-1.5 mb-[2px] '
      >
        <path d='M222.3 100h-76.9V15.5h76.9v20.2h-56.7v44.1H202V68.6h-25.6V48.4h45.9zM398.5 100h-76.9V15.5h66.1v37.6l10.8 2.1V100zM342 79.8h36.4v-7.9l-36.4-7v14.9zm0-35.5 25.6 5V35.6h-25.6v8.6zM233.5 15.5V100h20.2V83l36.5-11.7V100h20.2V15.5h-76.9zm20.2 46.3v-26h36.5V50l-36.5 11.8z' />
        <g>
          <path d='M37 92.6a17.2 17.2 0 0 1-3.2-4.3c-.8 1.6-1.8 3-3 4.3-.3.1-.4.3-.6.5-.8.8-1.3 2-1.3 3.2a4.9 4.9 0 1 0 8-3.7zM51.9 92.6a17.2 17.2 0 0 1-3.1-4.3c-.8 1.6-1.9 3-3.1 4.3l-.5.5c-.8.8-1.3 2-1.3 3.2a4.9 4.9 0 1 0 8-3.7zM66.5 92.6a17.2 17.2 0 0 1-3.1-4.3c-.8 1.6-1.9 3-3.1 4.3l-.5.5c-.8.8-1.3 2-1.3 3.2a4.9 4.9 0 1 0 8-3.7z' />
          <g>
            <path d='M63.4 111.3a14.8 14.8 0 0 1-7.3-2 14.9 14.9 0 0 1-14.7 0 15 15 0 0 1-16-.9 15 15 0 0 1-6-10.2l-.3-1.8v-9.3a48.8 48.8 0 0 1-18.6-43A48.4 48.4 0 0 1 48 .2h.7a48.2 48.2 0 0 1 48.5 48.5A48.7 48.7 0 0 1 78.5 87v9.3l-.3 1.8a14.8 14.8 0 0 1-8.5 11.7c-2 1-4 1.4-6.3 1.4zm-7-14.9a7 7 0 0 0 14 0v-.3h.2v-13h.2a40.6 40.6 0 0 0-22-75h-.6c-8.5 0-16.6 2.8-23.4 7.8l8.5 10.5 7-5.6 1.9-1.6 5.6 24-.5.2-6.6-18.8-7.6 7.7-6.4-6.3-4.5 2.5 4.9 10.2-9.7-10.9 5.3-5.8-2.4-2.3A40.8 40.8 0 0 0 8.1 49.2 40.6 40.6 0 0 0 26.8 83l.1 13.1h.1v.3a7 7 0 0 0 14.2 0h.5a7 7 0 0 0 14.1 0h.5z' />
            <path d='M48.8.5A48.3 48.3 0 0 1 78.2 87v9.5L78 98a14.7 14.7 0 0 1-21.9 11 14.6 14.6 0 0 1-14.7 0 14.7 14.7 0 0 1-16-.9c-3.1-2.3-5.3-6-5.8-10a7 7 0 0 1-.2-1.8V87A48.3 48.3 0 0 1 48 .5h.7M33.3 26.8l7.2-5.8 1.5-1.3.5 1.8 5 21.8-6.7-19.2-6.5 6.6L33 32l-1.4-1.3-5-5-4.8 2.8 4.2 8.8-6.5-7.3-1-1.2-.8-.9 1-1.2L23 22l-2.7-2.6A41 41 0 0 0 7.8 49.2a41 41 0 0 0 18.8 34v13.2h.2a7.3 7.3 0 1 0 14.6 0 7.3 7.3 0 1 0 14.7 0 7.3 7.3 0 0 0 14.6 0h.1v-.5l.1-12.7A41 41 0 0 0 48.8 7.8h-.6c-8.9.1-17 3.1-23.8 8l3.5 4.3 5.4 6.7M48.8 0H48A48.6 48.6 0 0 0 4.4 69.1a48.4 48.4 0 0 0 14.4 18.2v9.1l.3 1.8a15.2 15.2 0 0 0 22.3 11.4 15.1 15.1 0 0 0 14.7 0 15.3 15.3 0 0 0 13.7.5 15.1 15.1 0 0 0 8.7-11.9 8 8 0 0 0 .2-1.8V87.3A48.9 48.9 0 0 0 48.7 0zm-.6 8.3h.6a40.3 40.3 0 0 1 40.4 40.5c0 13.8-7 26.5-18.6 34l-.2.2V95.9h-.2v.5a6.8 6.8 0 0 1-13.6 0h-1a6.8 6.8 0 0 1-13.7 0h-1a6.8 6.8 0 0 1-13.6 0v-.5h-.1V83l-.3-.2a40.4 40.4 0 0 1-6.6-62.7l2 2-3.8 4.1-1.1 1.3-.3.3.3.3.8 1 1 1.1 6.5 7.3 2.3 2.7-1.5-3.2-4-8.4 4.1-2.3 4.7 4.6 1.4 1.4.4.3.3-.3 1.2-1.2 6-6L47 43.4l1-.3-5.2-21.8-.4-1.8-.2-.8-.6.5-1.5 1.3-6.8 5.5-5.1-6.3-3.1-3.8a40 40 0 0 1 23-7.7z' />
          </g>
          <g>
            <path d='m41.4 51.3-.8-1.3-.8-1.2a16.2 16.2 0 0 0-3-3l-1-.6-.4-.2a638.5 638.5 0 0 0 1.4 2.7l-1.7-.7-4.2-1.4a11.1 11.1 0 0 0-14.5 9.1l-.2 1a11.1 11.1 0 0 0 8 12l3.7 1.2c1.5.4 3 .5 4.6.3-.7.4-1.3.8-1.9 1l-1.6.9-1.4.6h.4l1.2.1a13.4 13.4 0 0 0 4.3-.5c.4 0 .8-.2 1.3-.4l1.4-.7c1-.5 1.9-1.1 2.8-2l.7-.7.2-.1v-.2l.3-.3.3-.3.1-.2.2-.3a14.4 14.4 0 0 0 2-4.3l.2-2 .1-1.8a14.8 14.8 0 0 0-1.7-6.7zM81.2 54.7c-.9-7-8-11.4-14.6-9.1L62.5 47l-1.8.7.7-1.3.7-1.4-.4.2-1 .6-1.3 1.2-1.7 1.8L57 50l-.8 1.3a15.4 15.4 0 0 0-1.7 6.7v1.9l.4 1.9a13.6 13.6 0 0 0 2 4.3l.1.3.1.2.3.3.3.3v.2l.2.1.7.7c1 .9 1.9 1.5 2.8 2l1.4.7 1.4.4a14.2 14.2 0 0 0 4.2.5h1.2l.4-.1-1.4-.7c-.5-.1-1-.4-1.6-.7l-1.8-1c1.5.1 3 0 4.6-.4l3.7-1.1c5.2-1.6 8.6-6.7 7.9-12l-.1-1zM49.9 80.2h2.7c.5 0 .8-.7.6-1.2l-2.8-6c-.3-.7-1.1-.4-1.1.4v6c0 .4.2.8.6.8zM45 79.6h2.7c.3 0 .6-.3.6-.7v-4.7c0-.6-.9-.9-1.2-.3l-2.7 4.7c-.3.4 0 1 .5 1z' />
          </g>
        </g>
      </svg>
    </a>
  );
};
