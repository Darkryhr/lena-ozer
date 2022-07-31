import React from 'react';

const Loader = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen absolute bg-gradient-to-r from-rose-100 to-teal-100 z-50'>
      <div className='w-40 h-40 border-t-4 border-b-4 border-rose-400 rounded-full animate-spin'></div>
    </div>
  );
};

export default Loader;
