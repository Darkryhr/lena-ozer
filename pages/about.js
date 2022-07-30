import React from 'react';

const About = () => {
  return (
    <div className='mx-auto h-screen flex items-center px-8 max-w-7xl justify-center'>
      <div className='flex md:items-start justify-center space-x-6 flex-shrink-0 md:flex-row flex-col items-center'>
        <div className='h-56 w-56 bg-gray-300 rounded-full'></div>
        <div className='flex flex-col w-1/2 mt-6'>
          <h1 className='text-4xl font-extrabold font-serif'>Yours truly,</h1>
          <p className='text mt-3 text-gray-600 font-medium  max-w-3xl'>
            Id culpa commodo voluptate pariatur sit mollit consectetur laboris
            Lorem tempor dolor ut occaecat. Nisi esse labore laborum Lorem anim
            velit ipsum irure sint cillum in. Aliqua amet culpa consectetur
            consectetur occaecat nulla magna eu incididunt sint sint
            exercitation consectetur ea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
