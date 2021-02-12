import useSWR from 'swr';
import fetcher from '../functions/fetcher';
// `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/menus/v1/menus/${slug}`,

const useFacebook = (slug) => {
  const { data, error } = useSWR(
    `https://graph.facebook.com/v9.0/oembed_page?access_token=474208436910673|b2505ebd2cf7f6e91a11054b7c4e6f44&url=https://www.facebook.com/ottawa.brinca/`,
    fetcher
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useFacebook;
