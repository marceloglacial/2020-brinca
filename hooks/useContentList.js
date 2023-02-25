import useSWR from 'swr';
import fetcher from '../functions/fetcher';
import { getPages } from 'functions/getPages';
import { API_URL_PAGES } from 'constants';

const usePages = (type) => {
  const contentType = type;
  const url = API_URL_PAGES;
  const { data, error } = useSWR(url, fetcher);
  return {
    data: getPages(data, contentType),
    isLoading: !error && !data,
    isError: error,
  };
};
export default usePages;
