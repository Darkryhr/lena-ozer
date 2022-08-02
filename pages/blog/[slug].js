import React from 'react';
import { CgArrowLongLeft } from 'react-icons/cg';
import { sanityClient, urlFor } from 'sanity';
import { PortableText } from '@portabletext/react';
import SectionWrapper from '@components/SectionWrapper';
import Link from 'next/link';
import Image from 'next/image';
import { SanityImage } from 'sanity';

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
  } = post;

  return (
    <div className='mx-auto min-h-screen flex md:items-start items-start md:px-8 px-3 max-w-7xl justify-center pb-24'>
      <article className='px-4'>
        <SectionWrapper delay={0.3}>
          {mainImage && (
            <img
              className='left-1/2 -mx-[50vw] max-w-[100vw] relative right-1/2 w-[100vw] max-h-[60vh] object-cover mb-8'
              src={urlFor(mainImage).url()}
            />
          )}
        </SectionWrapper>
        <Link href='/blog'>
          <button className='transition hover:opacity-70 mb-4 hover:-translate-x-1'>
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
      return <p className='my-5'>{children}</p>;
    },
  },
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />;
    },
  },
};
