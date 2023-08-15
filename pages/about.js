import SectionWrapper from '@components/SectionWrapper';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className='mx-auto flex md:items-center items-start md:pt-0 pt-12 px-8 max-w-7xl justify-center pb-24'>
      <div className='flex items-start justify-center md:space-x-6 md:flex-row flex-col relative'>
        <SectionWrapper delay={0.1}>
          <div
            className='w-[220px] h-[220px] rounded-full bg-center bg-no-repeat	bg-cover'
            style={{
              backgroundImage: 'url(/avatar.jpg)',
            }}
          ></div>
        </SectionWrapper>
        <div className='flex flex-col mt-6 md:max-w-2xl'>
          <SectionWrapper delay={0.1}>
            <h1 className='text-5xl font-extrabold font-serif text-gray-900'>
              About yours truly,
            </h1>
          </SectionWrapper>
          <SectionWrapper delay={0.2}>
            <p className='mt-4 font-semibold text-red-600'>
              Hello! I&apos;m Lena Ozer.
            </p>
            <div className='h-[1px] my-3 w-1/6 bg-red-400'></div>
            <ul className='font-body text-gray-800 space-y-5 '>
              <li className='relative'>
                <span className='absolute top-0 -left-6'>🖍</span>I am a private
                tutor, creator of individual training programs for those with
                whom I work, and a content creator. Since 2001, I have been
                helping English learners reach their goals in reading, writing,
                listening, speaking, grammar, vocabulary, pronunciation and
                other language skills.
              </li>
              <li className='relative'>
                <span className='absolute top-0 -left-6'>🖍</span>
                My professional work is focused on helping adults and children
                alike learn the basics of the English language. I over 20 years
                of experience teaching English in Israel both in person and
                online. I currently live in Ashdod, Israel.
              </li>
              <li className='relative'>
                <span className='absolute top-0 -left-6'>🖍</span>I spend my days
                helping adults and schoolchildren from Russian-speaking families
                learn English offline and online on Zoom, and selecting the
                necessary learning resources for my students and for self-study.
              </li>
              {/* <li className='relative'>
                <span className='absolute top-0 -left-6'>🖍</span>
                Read more about my teaching experience here 🔗.
              </li>
              <li className='relative'>
                <span className='absolute top-0 -left-6'>🖍</span>
                Open my bookshelf ⇩ with all my favorite textbooks for learning
                and teaching English here 
              </li> */}
            </ul>
            {/* Lena Ozer - English tutor */}
          </SectionWrapper>
        </div>
        <div className='absolute opacity-20 right-0 -bottom-56'>
          <Image
            src='/signature2.svg'
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
