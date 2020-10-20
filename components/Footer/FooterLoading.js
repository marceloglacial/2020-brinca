import Skeleton from 'react-loading-skeleton';

const FooterLoading = (props) => {
  return (
    <div className='container-fluid mt-4 text-center'>
      <Skeleton height={70} />
      <p className='mt-2'>
        <Skeleton height={15} width={200} />
      </p>
    </div>
  );
};
export default FooterLoading;
