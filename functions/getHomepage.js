import { getBlocks } from './getBlocks';

export const getHomePage = async () => {
  const results = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/homepage?populate=frontpage.image,frontpage.button`
  );
  const page = await results.json();
  const pageAttributes = page.data.attributes;
  return {
    blocks: getBlocks(pageAttributes.frontpage),
  };
};
