import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '3bg6emh6',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.NEXT_APP_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);