import useSWR from 'swr';
import fetcher from '../functions/fetcher';

const useApi = (url) => {
  const { data, error } = useSWR(url, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
    isLastPage: data?.data?.status,
  };
};
export default useApi;
