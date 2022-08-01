import SectionWrapper from '@components/SectionWrapper';
import Link from 'next/link';
import React from 'react';
import { sanityClient } from '../../sanity';

export async function getServerSideProps() {
  const posts = await sanityClient.fetch(`
    *[_type == "post"]{
_id,
_createdAt,
      title,
      "authorImage": author->image,
      "name": author->name,
      description,
      slug
    }
  `);

  return {
    props: {
      posts,
    },
  };
}

const Blog = ({ posts }) => {
  return (
    <div className='mx-auto flex-col h-screen flex md:items-start items-start pt-12 md:px-8 px-3 w-full max-w-7xl justify-start pb-24'>
      <SectionWrapper delay={0.1}>
        <h1 className='text-5xl font-extrabold font-serif text-gray-900 mb-8'>
          Blog
        </h1>
      </SectionWrapper>
      {posts.reverse().map((post, index) => (
        <PostItem post={post} key={post._id} index={index + 1} />
      ))}
    </div>
  );
};

export default Blog;

const PostItem = ({ post, index }) => {
  return (
    <SectionWrapper delay={index / 10}>
      <Link href={`/blog/${post.slug.current}`}>
        <div className='w-full px-4 py-6 border-l-2 mb-8 border-rose-400 cursor-pointer transition duration-300 hover:-translate-y-1 hover:border-red-300'>
          <h1 className='font-serif font-bold text-4xl'>{post.title}</h1>
          <p className='mt-1 text-gray-600 '>{post.description}</p>
        </div>
      </Link>
    </SectionWrapper>
  );
};
