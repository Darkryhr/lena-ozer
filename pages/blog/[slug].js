import SectionWrapper from '@components/SectionWrapper';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgArrowLongLeft } from 'react-icons/cg';
import { SanityImage, sanityClient, urlFor } from 'sanity';

export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map(slug => ({ params: { slug } })),
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug = '' } = params;
  const post = await sanityClient.fetch(
    `
  *[_type == "post" && slug.current == $slug][0]{
    _createdAt,
    title,
    "authorImage": author->image,
    "name": author->name,
    mainImage,
    description,
    body
  }
`,
    { slug }
  );

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

const BlogPost = ({ post }) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    authorImage,
    body = [],
    mainImage,
    _createdAt,
  } = post;

  return (
    <div className='mx-auto min-h-screen flex md:items-start items-start md:px-8 px-3 max-w-7xl justify-center pb-24'>
      <article className='px-4 flex flex-col mt-8'>
        <SectionWrapper delay={0.3}>
          {mainImage && (
            <Image
              className='left-1/2 -mx-[50vw] relative right-1/2 w-full object-cover rounded-lg'
              src={urlFor(mainImage).url()}
              width={500}
              height={250}
              layout='responsive'
              alt='placeholder'
            />
          )}
        </SectionWrapper>
        <Link href='/blog'>
          <button className='transition hover:opacity-70 mb-4 hover:-translate-x-1 mt-8'>
            <CgArrowLongLeft size={35} />
          </button>
        </Link>
        <SectionWrapper delay={0.1}>
          <h1 className='font-extrabold text-7xl font-serif'>{title}</h1>
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <div className='flex items-center py-3'>
            {authorImage && (
              <div className='inline-block'>
                <Image
                  src={urlFor(authorImage).width(30).url()}
                  width='30px'
                  height='30px'
                  alt={`${name}'s picture`}
                  className='rounded-2xl'
                />
                {/* <img
                  src={urlFor(authorImage).width(30).url()}
                  alt={`${name}'s picture`}
                /> */}
              </div>
            )}
            <span className='font-normal text-sm text-gray-600 ml-2'>
              By {name}
            </span>
          </div>
        </SectionWrapper>

        <SectionWrapper delay={0.4}>
          <div className='mt-4 px-1'>
            <PortableText value={body} components={myPortableTextComponents} />
          </div>
        </SectionWrapper>
      </article>
    </div>
  );
};

export default BlogPost;

const myPortableTextComponents = {
  block: {
    normal: ({ children }) => {
      return <p className='my-5 leading-relaxed'>{children}</p>;
    },
  },
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />;
    },
  },
};
