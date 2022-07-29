import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='font-body bg-gradient-to-r from-rose-100 to-teal-100 '>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
