import useSWR from 'swr';
import fetcherWithAuth from '../functions/fetcherWithAuth';

const useForms = (url) => {
  const { data, error } = useSWR(url, fetcherWithAuth);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useForms;
