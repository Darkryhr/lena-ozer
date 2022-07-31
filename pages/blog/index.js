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
    <div className='mx-auto flex-col h-screen flex md:items-start items-start pt-12 px-8 max-w-7xl justify-start pb-24'>
      <h1 className='text-5xl font-extrabold font-serif text-gray-900 mb-8'>
        Blog
      </h1>
      {posts.reverse().map(post => (
        <PostItem post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Blog;

const PostItem = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <div className='w-full px-4 py-3 border-l-2 mb-8 border-rose-400 cursor-pointer transition duration-300 hover:-translate-y-1'>
        <h1 className='font-serif font-bold text-4xl'>{post.title}</h1>
        <p className='mt-1 text-gray-600 '>{post.description}</p>
      </div>
    </Link>
  );
};
