import { API_MENU } from '../constants';
export const getNavigation = async () => {
  const results = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${API_MENU}`);
  const menu = await results.json();
  return menu?.data?.attributes?.items;
};
