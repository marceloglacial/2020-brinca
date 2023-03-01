import useApi from './useApi';
import { API_PAGES_PARAMS, API_EVENTS_PARAMS } from 'constants';
import { getCard } from 'functions/getCard';

const useContentList = (type) => {
  const urlType = {
    pages: API_PAGES_PARAMS,
    events: API_EVENTS_PARAMS,
  };

  const { data } = useApi(
    `${process.env.NEXT_PUBLIC_API_URL}/${urlType[type]}`
  );
  const error = data?.error;

  return {
    data: data?.data.map((item) => getCard(item)),
    isLoading: !error && !data,
    isError: error,
  };
};
export default useContentList;
