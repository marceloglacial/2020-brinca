import useSWR from 'swr';
import fetcher from './fetcher';

const useMenu = (slug) => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/menus/v1/menus/${slug}`,
    fetcher
  );
  return {
    menuContent: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useMenu;
