import SectionWrapper from '@components/SectionWrapper';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className='mx-auto h-screen flex md:items-center items-start md:pt-0 pt-12 px-8 max-w-7xl justify-center pb-24'>
      <div className='flex items-start justify-center md:space-x-6 md:flex-row flex-col relative'>
        <SectionWrapper delay={0.1}>
          <div className='w-[220px] h-[220px] bg-gray-300 rounded-full'></div>
        </SectionWrapper>
        <div className='flex flex-col mt-6 md:max-w-2xl text-clip'>
          <SectionWrapper delay={0.1}>
            <h1 className='text-5xl font-extrabold font-serif text-gray-900'>
              Yours truly,
            </h1>
          </SectionWrapper>
          <SectionWrapper delay={0.2}>
            <p className='mt-3 font-body text-gray-800'>
              Id culpa commodo voluptate pariatur sit mollit consectetur laboris
              Lorem tempor dolor ut occaecat. Nisi esse labore laborum Lorem
              anim velit ipsum irure sint cillum in. Aliqua amet culpa
              consectetur consectetur occaecat nulla magna eu incididunt sint
              sint exercitation consectetur ea.
            </p>
          </SectionWrapper>
        </div>
        <div className='absolute md:top-8 md:right-6 md:left-auto md:bottom-auto opacity-50 -bottom-44 left-0'>
          <Image
            src='/signature.svg'
            width={400}
            height={300}
            alt='lenas signature'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
