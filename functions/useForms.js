import useSWR from 'swr';
import fetcherWithAuth from './fetcherWithAuth';

const useForms = (url) => {
  const { data, error } = useSWR(url, fetcherWithAuth);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useForms;
