import useSWR from 'swr';
import fetchetWithToken from './fetchetWithToken';

const useForms = (key) => {
  const { data, error } = useSWR(
    [`/api/forms/${key}`, process.env.NEXT_PUBLIC_TYPEFORM_KEY],
    fetchetWithToken
  );
  return {
    pageContent: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useForms;
