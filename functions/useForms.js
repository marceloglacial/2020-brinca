import useSWR from 'swr';
import fetcher from './fetcher';

const useForms = (key) => {
  const { data, error } = useSWR(
    `https://api.typeform.com/forms/cUzUw6Ft`,
    fetcher
  );
  return {
    pageContent: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useForms;
