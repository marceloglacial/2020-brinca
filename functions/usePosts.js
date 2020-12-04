import useSWR from 'swr';
import fetcher from './fetcher';

const usePosts = (id) => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts/${id || ''}`,
    fetcher
  );
  return {
    postData: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default usePosts;
