import React from 'react';
import { GiAbstract076 } from 'react-icons/gi';

const Home = () => {
  return (
    <div className='mx-auto h-screen flex justify-center flex-col px-8 relative max-w-7xl '>
      <h1 className='md:text-8xl text-5xl font-extrabold font-serif z-10'>
        Hello, my name is Lena.
      </h1>
      <p className='mt-2 text-lg text-gray-800 font-medium z-10'>
        Exploring culture and language.
      </p>
      <div className='absolute  -bottom-80 -right-32 opacity-70'>
        <GiAbstract076 size={800} className='fill-rose-300' />
      </div>
    </div>
  );
};

export default Home;
