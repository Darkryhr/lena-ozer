import React, { useState, useEffect } from 'react';
import SectionWrapper from '@components/SectionWrapper';
import Link from 'next/link';
import { sanityClient } from '../../sanity';

export async function getStaticProps() {
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
    revalidate: 60 * 60 * 24,
  };
}

const Blog = ({ posts }) => {
  const [sortedPosts, setSortedPosts] = useState([]);
  const [sortType, setSortType] = useState('_createdAt');

  useEffect(() => {
    const sortArray = type => {
      const types = {
        createdAt: '_createdAt',
      };

      const sortProperty = types[type];

      const sorted = [...posts]
        .sort((a, b) => b[sortProperty] - a[sortProperty])
        .reverse();
      setSortedPosts(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <div className='mx-auto flex-col h-screen flex md:items-start items-start pt-12 md:px-8 px-3 w-full max-w-7xl justify-start pb-24'>
      <SectionWrapper delay={0.1}>
        <h1 className='text-5xl font-extrabold font-serif text-gray-900 mb-8'>
          Blog
        </h1>
        {/* <select onChange={e => setSortType(e.target.value)}>
          <option value='albums'>Date created</option>
        </select> */}
      </SectionWrapper>
      {sortedPosts.reverse().map((post, index) => (
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
