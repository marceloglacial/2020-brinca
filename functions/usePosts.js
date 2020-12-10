import useSWR from 'swr';
import fetcher from './fetcher';

const usePosts = (id, per_age, offset) => {
  const postId = id ? id : '';
  const perPage = per_age ? `?per_page=${per_age}` : '';
  const offSet = offset ? `&offset=${offset}` : '';
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts/${postId}${perPage}${offSet}`,
    fetcher
  );
  return {
    postData: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default usePosts;
