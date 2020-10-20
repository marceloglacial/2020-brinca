import useSWR from 'swr';
import fetcher from './fetcher';

const usePage = (slug) => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/pages?slug=${slug}`,
    fetcher
  );
  return {
    pageContent: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default usePage;
