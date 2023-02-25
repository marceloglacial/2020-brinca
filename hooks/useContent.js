import useSWR from 'swr';
import fetcher from '../functions/fetcher';
import { getPages } from 'functions/getPages';
import { API_URL_PAGES, API_URL_EVENTS } from 'constants';

const useContent = (type) => {
  const urlType = {
    pages: API_URL_PAGES,
    events: API_URL_EVENTS,
  };

  const { data } = useSWR(urlType[type], fetcher);
  const error = data?.error;

  const dataType = {
    pages: !error && getPages(data, type),
    events: !error && getPages(data, type),
  };

  return {
    data: dataType[type],
    isLoading: !error && !data,
    isError: error,
  };
};
export default useContent;
