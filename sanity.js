import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-03-25',
};

export const sanityClient = createClient(config);

export const urlFor = src => createImageUrlBuilder(config).image(src);

export const SanityImage = ({ asset }) => {
  const imageProps = useNextSanityImage(sanityClient, asset);

  if (!imageProps) return null;

  return (
    <img
      src={imageProps.src}
      className='mt-32'
      style={{
        borderRadius: '5px ',
        margin: '1rem 0 1rem 0',
      }}
    />
  );
};
