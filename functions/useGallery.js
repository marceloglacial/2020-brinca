import useSWR from 'swr';
import fetcher from './fetcher';

const useGallery = (id) => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/media/${id}`,
    fetcher
  );
  return {
    mediaContent: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useGallery;
