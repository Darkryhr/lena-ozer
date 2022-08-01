import React from 'react';
import { sanityClient, urlFor } from 'sanity';
import { PortableText } from '@portabletext/react';
import SectionWrapper from '@components/SectionWrapper';

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
  } = post;

  return (
    <div className='mx-auto h-screen flex md:items-start items-start pt-12 md:px-8 px-3 max-w-7xl justify-center pb-24'>
      <article className='w-full'>
        <SectionWrapper delay={0.1}>
          <h1 className='font-extrabold text-7xl font-serif'>{title}</h1>
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <div className='flex items-center py-3'>
            {authorImage && (
              <div className='inline-block'>
                <img
                  src={urlFor(authorImage).width(30).url()}
                  alt={`${name}'s picture`}
                />
              </div>
            )}
            <span className='font-normal text-sm text-gray-600 ml-2'>
              By {name}
            </span>
          </div>
        </SectionWrapper>
        <SectionWrapper delay={0.3}>
          <div className='mt-4'>
            <PortableText value={body} />
          </div>
        </SectionWrapper>
      </article>
    </div>
  );
};

export default BlogPost;
