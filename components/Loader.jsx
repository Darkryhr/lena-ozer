import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loader = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen absolute bg-gradient-to-r from-rose-100 to-teal-100 z-50'>
      <div className='flex flex-col items-center justify-center'>
        <AiOutlineLoading3Quarters
          className='animate-spin fill-rose-400'
          size={30}
        />
        <p className='text-sm font-semibold mt-3 text-rose-500'>Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
