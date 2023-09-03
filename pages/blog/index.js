import SectionWrapper from '@components/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { sanityClient, urlFor } from '../../sanity';
export async function getStaticProps() {
  const posts = await sanityClient.fetch(`
    *[_type == "post"]{
_id,
_createdAt,
      title,
      "authorImage": author->image,
      "name": author->name,
      description,
      mainImage,
      slug
    }
  `);

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}

const Blog = ({ posts }) => {
  return (
    <div className='mx-auto flex-col flex md:items-start items-start pt-12 md:px-8 px-3 w-full max-w-7xl justify-start pb-24'>
      <SectionWrapper delay={0.1}>
        <h1 className='text-5xl font-extrabold font-serif text-gray-900 mb-8'>
          Blog
        </h1>
      </SectionWrapper>
      {posts
        // default sorting by date created
        .sort((a, b) => new Date(a._createdAt) - new Date(b._createdAt))
        .reverse()
        .map((post, index) => (
          <PostItem
            post={post}
            key={post._id}
            index={index + 1}
            imgUrl={urlFor(post.mainImage).url()}
          />
        ))}
    </div>
  );
};

export default Blog;

const PostItem = ({ post, index, imgUrl }) => {
  return (
    <SectionWrapper delay={index / 10}>
      <Link href={`/blog/${post.slug.current}`}>
        <div className='w-full p-4 border-l-2 mb-8 border-rose-400 cursor-pointer transition duration-300 hover:-translate-y-1 hover:border-red-300 flex items-center'>
          <div className='flex flex-col'>
            <h1 className='font-serif font-bold text-3xl'>{post.title}</h1>
            <p className='mt-2 text-gray-600 text-sm'>{post.description}</p>
          </div>
        </div>
      </Link>
    </SectionWrapper>
  );
};
