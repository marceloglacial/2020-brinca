import useSWR from 'swr';
import fetcher from './fetcher';

const useForms = (key) => {
  const url = `/api/forms/${key}`;
  const { data, error } = useSWR(url, fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useForms;
