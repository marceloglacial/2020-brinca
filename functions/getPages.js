import { getBlocks } from './getBlocks';

export const getPages = async () => {
  const results = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pages?populate=content,thumbnail`
  );
  const pages = await results.json();
  return pages?.data;
};

export const getSinglePage = async (pageId) => {
  const results = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pages/${pageId}?populate=content.photos,content.buttons,content.image,thumbnail`
  );
  const page = await results.json();
  const pageAttributes = page.data.attributes;
  return {
    id: page.data.id,
    title: pageAttributes.title,
    blocks: getBlocks(pageAttributes.content),
  };
};
