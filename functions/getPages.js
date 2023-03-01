import { API_BLOCKS, API_PAGES_PARAMS } from '../constants';
import { getBlocks } from './getBlocks';

export const getPages = async () => {
  const results = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${API_PAGES_PARAMS}`
  );
  const pages = await results.json();
  return pages?.data;
};

export const getSinglePage = async (pageId) => {
  const results = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pages/${pageId}?${API_BLOCKS}`
  );
  const page = await results.json();
  if (!page.data) return {};
  const pageAttributes = page?.data?.attributes;
  return {
    id: page?.data.id,
    title: pageAttributes?.title,
    blocks: getBlocks(pageAttributes?.content),
  };
};
