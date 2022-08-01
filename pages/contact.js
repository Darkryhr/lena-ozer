import SectionWrapper from '@components/SectionWrapper';
import React from 'react';

const Contact = () => {
  return (
    <div className='mx-auto h-screen flex items-start px-12 max-w-7xl justify-center md:pt-24 pt-20 md:mb-0 mb-20 pb-16'>
      <div className='flex flex-col w-full max-w-5xl'>
        <SectionWrapper delay={0.1}>
          <h1 className='text-5xl font-extrabold font-serif text-gray-900 mb-8'>
            Let&apos;s get in touch.
          </h1>
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <form className='flex flex-col'>
            <div className='grid md:grid-cols-2 md:gap-4'>
              <div className='form-group mb-6'>
                <label
                  htmlFor='inputName'
                  className='form-label inline-block mb-2 text-gray-700 font-semibold'
                >
                  Name:
                </label>
                <input
                  type='text'
                  className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-rose-400 focus:outline-none'
                  id='inputName'
                  aria-describedby='nameHelp'
                  placeholder='Your name...'
                />
              </div>
              <div className='form-group mb-6'>
                <label
                  htmlFor='inputEmail'
                  className='form-label inline-block mb-2 text-gray-700 font-semibold'
                >
                  E-mail:
                </label>
                <input
                  type='email'
                  className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-rose-400 focus:outline-none'
                  id='inputEmail'
                  aria-describedby='emailHelp'
                  placeholder='Your name...'
                />
              </div>
            </div>

            <div className='form-group mb-6'>
              <label
                htmlFor='messageArea'
                className='form-label inline-block mb-2 text-gray-700 font-semibold'
              >
                Message:
              </label>
              <textarea
                className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-rose-400 focus:outline-none'
                id='messageArea'
                rows='5'
                placeholder='Message'
              ></textarea>
            </div>
            <button
              type='submit'
              className='w-40 px-6 py-3 bg-rose-500  text-white  font-medium  leading-tight  rounded  shadow-md  hover:bg-rose-600 hover:shadow-lg  focus:bg-rose-600 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-rose-700 active:shadow-lg  transition  duration-150  ease-in-out'
            >
              Send
            </button>
          </form>
        </SectionWrapper>
      </div>
    </div>
  );
};

export default Contact;
