import Link from 'next/link';
import React from 'react';
import { sanityClient } from '../../sanity';

export async function getServerSideProps() {
  const posts = await sanityClient.fetch(`
    *[_type == "post"]{

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
    <div className='mx-auto flex-col h-screen flex md:items-center items-start pt-12 px-8 max-w-7xl justify-start pb-24'>
      {posts.map(post => (
        <Link key={post.slug} href={`/blog/${post.slug.current}`}>
          <div className='w-full px-4 py-3 border-l-2 border-rose-400 cursor-pointer'>
            <h1 className='font-serif font-bold text-4xl'>{post.title}</h1>
            <p className='mt-1 text-gray-600 '>{post.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
