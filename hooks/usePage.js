import useSWR from 'swr';
import fetcher from '../functions/fetcher';

const usePage = (slug, type) => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/${
      type || 'page'
    }s?slug=${slug}`,
    fetcher
  );
  return {
    pageContent: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default usePage;
