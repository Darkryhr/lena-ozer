import SectionWrapper from '@components/SectionWrapper';
import React from 'react';
import { GiAbstract076 } from 'react-icons/gi';

const Home = () => {
  return (
    <div className='h-screen flex justify-center flex-col pb-40 overflow-hidden'>
      <div className='w-full mx-auto  max-w-7xl relative px-6'>
        <SectionWrapper delay={0.1} styles={{ zIndex: '99' }}>
          <h1 className='md:text-8xl text-6xl font-extrabold font-serif z-10 text-gray-900'>
            Hello, I&apos;m Lena.
          </h1>
          <p className='mt-2 text-lg text-gray-800 font-medium z-10 tracking-tight'>
            Exploring culture and language.
          </p>
        </SectionWrapper>
        <div className='absolute top-0 -right-64 opacity-70 -z-10'>
          <GiAbstract076 size={800} className='fill-rose-300' />
        </div>
      </div>
    </div>
  );
};

export default Home;
